import { ChangeEvent, useState } from "react";

export interface onChangeFormPropsType<T> {
  event: ChangeEvent<T>;
}

export const useCreateBlog = () => {
  const [bodyText, setbodyText] = useState("");
  const [title, setTitle] = useState("");

  const onChangeBodyTextarea = ({
    event,
  }: onChangeFormPropsType<HTMLTextAreaElement>) => {
    setbodyText(event.target.value);
  };

  const onChangeTitleInput = ({
    event,
  }: onChangeFormPropsType<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return {
    bodyText,
    onChangeBodyTextarea,
    title,
    onChangeTitleInput,
  };
};
