import { useState } from "react";

import { BlogType } from "@/types/supabase/table";

import { useUpdateBlog } from "@/features/blog/hooks/useUpdateBlog";

import { Template } from "./Template";

interface Props {
  blog: BlogType;
  isPc: boolean;
}

export const TemplateContainer = ({ blog, isPc }: Props) => {
  const {
    bodyText,
    onChangeBodyTextarea,
    title,
    onChangeTitleInput,
    updateBlog,
  } = useUpdateBlog({ blog });

  const [isPreview, setIsPreview] = useState(false);

  const onChangeViewSwitch = () => {
    setIsPreview((prev) => !prev);
  };

  return (
    <Template
      isPc={isPc}
      bodyText={bodyText}
      onChangeBodyTextarea={onChangeBodyTextarea}
      title={title}
      onChangeTitleInput={onChangeTitleInput}
      updateBlog={updateBlog}
      onChangeViewSwitch={onChangeViewSwitch}
      isPreview={isPreview}
    />
  );
};
