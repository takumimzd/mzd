import { CSSProperties, ReactNode } from "react";
import { Button as AntdButton } from "antd";

interface Props {
  children: ReactNode;
  type?: "primary" | "default";
  style?: CSSProperties;
  onClick: () => void;
}

export const Button = ({
  children,
  style,
  type = "default",
  onClick,
}: Props) => (
  <AntdButton style={style} type={type} onClick={onClick}>
    {children}
  </AntdButton>
);
