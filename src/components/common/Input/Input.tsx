import { ChangeEvent, CSSProperties } from "react";
import { Input as AntdInput } from "antd";

interface Props {
  style: CSSProperties;
  text: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = ({ style, text, onChange, placeholder }: Props) => {
  return (
    <AntdInput
      style={style}
      defaultValue={text}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
