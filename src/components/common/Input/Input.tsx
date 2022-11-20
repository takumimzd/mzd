import { ChangeEvent } from "react";
import { Input as AntdInput } from "antd";
import { inputStyle } from "./input.css";

interface Props {
  text: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = ({ text, onChange, placeholder }: Props) => {
  return (
    <AntdInput
      className={inputStyle.input}
      defaultValue={text}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
