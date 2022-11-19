import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

import { post } from "@/apis/common/post";

import { BlogParamsType } from "@/types/blog";
import { BlogType } from "@/types/supabase/table";

export const useCreateBlog = () => {
  const router = useRouter();
  const [bodyText, setbodyText] = useState("");
  const [title, setTitle] = useState("");

  const onChangeBodyTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setbodyText(event.target.value);
  };

  const onChangeTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const createBlog = async () => {
    const params: BlogParamsType = {
      title,
      body: bodyText,
    };
    const { data, error } = await post<BlogType>({
      table: "blogs",
      params,
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
    createBlog,
  };
};
