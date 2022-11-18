import { ChangeEvent, CSSProperties } from "react";
import { Input as AntdInput } from "antd";

interface Props {
  style: CSSProperties;
  text: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const Textarea = ({ style, text, onChange, placeholder }: Props) => {
  return (
    <AntdInput.TextArea
      style={style}
      autoSize
      defaultValue={text}
      onChange={onChange}
      placeholder={placeholder}
    ></AntdInput.TextArea>
  );
};
