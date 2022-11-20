import { ChangeEvent } from "react";
import { Input as AntdInput } from "antd";
import { textareaStyle } from "./textarea.css";

interface Props {
  text: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const Textarea = ({ text, onChange, placeholder }: Props) => {
  return (
    <AntdInput.TextArea
      className={textareaStyle.textarea}
      autoSize
      defaultValue={text}
      onChange={onChange}
      placeholder={placeholder}
    ></AntdInput.TextArea>
  );
};
