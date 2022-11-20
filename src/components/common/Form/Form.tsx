import { Form as AntdForm } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Form = ({ children, className }: Props) => {
  return <AntdForm className={className}>{children}</AntdForm>;
};
