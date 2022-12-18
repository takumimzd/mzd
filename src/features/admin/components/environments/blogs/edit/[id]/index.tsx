import { useState } from "react";

import { BlogType } from "@/types/supabase/table";

import { useUpdateBlog } from "@/features/blog/hooks/useUpdateBlog";
import { useSession } from "@/hooks/useSession";
import { Template } from "@/features/admin/components/templates/blogs/edit/[id]";

interface Props {
  blog: BlogType;
}

export const Environment = ({ blog }: Props) => {
  const { isSignedIn } = useSession();
  const [isPreview, setIsPreview] = useState(false);

  const {
    bodyText,
    onChangeBodyTextarea,
    title,
    onChangeTitleInput,
    updateBlog,
  } = useUpdateBlog({ blog });

  const onChangeViewSwitch = () => {
    setIsPreview((prev) => !prev);
  };

  if (!isSignedIn) return null;

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
