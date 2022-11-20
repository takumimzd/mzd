import { ReactNode } from "react";
import { Button as AntdButton } from "antd";

interface Props {
  children: ReactNode;
  type?: "primary" | "default";
  className?: string;
  onClick: () => void;
}

export const Button = ({
  children,
  className,
  type = "default",
  onClick,
}: Props) => (
  <AntdButton className={className} type={type} onClick={onClick}>
    {children}
  </AntdButton>
);
