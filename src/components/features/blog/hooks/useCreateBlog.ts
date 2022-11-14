import { ChangeEvent, useState } from "react";

export const useCreateBlog = () => {
  const [bodyText, setbodyText] = useState("");
  const [title, setTitle] = useState("");

  const onChangeBodyTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setbodyText(event.target.value);
  };

  const onChangeTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return {
    bodyText,
    onChangeBodyTextarea,
    title,
    onChangeTitleInput,
  };
};
