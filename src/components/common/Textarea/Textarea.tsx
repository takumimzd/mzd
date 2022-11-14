import { ChangeEvent, CSSProperties } from "react";
import { Input as AntdInput } from "antd";

interface Props {
  style: CSSProperties;
  text: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({ style, text, onChange }: Props) => {
  return (
    <AntdInput.TextArea
      style={style}
      autoSize
      defaultValue={text}
      onChange={onChange}
    ></AntdInput.TextArea>
  );
};
