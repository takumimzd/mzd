import { CSSProperties, ReactNode } from "react";
import { Button as AntdButton } from "antd";

interface Props {
  children: ReactNode;
  type?: "primary" | "default";
  style?: CSSProperties;
}

export const Button = ({ children, style, type = "default" }: Props) => (
  <AntdButton style={style} type={type}>
    {children}
  </AntdButton>
);
