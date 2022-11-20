import { Form } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  name: string[];
}

export const FormItem = ({ children, className, name }: Props) => {
  return (
    <Form.Item className={className} name={name}>
      {children}
    </Form.Item>
  );
};
