import { useState } from "react";

import { BlogType } from "@/types/supabase/table";

import { useUpdateBlog } from "@/features/blog/hooks/useUpdateBlog";

import { Template } from "./Template";

interface Props {
  blog: BlogType;
}

export const TemplateContainer = ({ blog }: Props) => {
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
