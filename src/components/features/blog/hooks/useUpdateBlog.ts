import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BlogType } from "@/types/supabase/table";
import { BlogParamsType } from "@/types/blog";

import { patch } from "@/apis/common/patch";

interface Props {
  blog: BlogType;
}
export const useUpdateBlog = ({ blog }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState(blog.title);
  const [bodyText, setBodyText] = useState(blog.body);

  const onChangeBodyTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBodyText(event.target.value);
  };

  const onChangeTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const updateBlog = async () => {
    const params: BlogParamsType = {
      title,
      body: bodyText,
    };
    const { data, error } = await patch<BlogType>({
      table: "blogs",
      params,
      column: "id",
      value: Number(id),
    });
    if (!!data && !error) {
      router.push(`/blogs/${data.id}`);
    }
  };

  return {
    bodyText,
    onChangeBodyTextarea,
    title,
    onChangeTitleInput,
    updateBlog,
  };
};
