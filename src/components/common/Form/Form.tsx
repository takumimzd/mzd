import { Form as AntdForm } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

export const Form = ({ children, style }: Props) => {
  return <AntdForm style={style}>{children}</AntdForm>;
};
