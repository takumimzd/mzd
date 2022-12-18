import { useState } from "react";
import { useCreateBlog } from "@/features/blog/hooks/useCreateBlog";

import { useSession } from "@/hooks/useSession";
import { Template } from "../../../templates/blogs/new";

export const Environment = () => {
  const { isSignedIn } = useSession();

  const {
    bodyText,
    onChangeBodyTextarea,
    title,
    onChangeTitleInput,
    createBlog,
  } = useCreateBlog();
  const [isPreview, setIsPreview] = useState(false);

  const onChangeViewSwitch = () => {
    setIsPreview((prev) => !prev);
  };

  if (!isSignedIn) return null;

  return (
    <Template
      onChangeBodyTextarea={onChangeBodyTextarea}
      onChangeTitleInput={onChangeTitleInput}
      onChangeViewSwitch={onChangeViewSwitch}
      createBlog={createBlog}
      title={title}
      bodyText={bodyText}
      isPreview={isPreview}
    />
  );
};
