import { Form } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  name: string[];
}

export const FormItem = ({ children, style, name }: Props) => {
  return (
    <Form.Item style={style} name={name}>
      {children}
    </Form.Item>
  );
};
