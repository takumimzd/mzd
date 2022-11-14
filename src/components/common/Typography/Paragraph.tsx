import { Typography } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

export const Paragraph = ({ children, style }: Props) => {
  return <Typography.Paragraph style={style}>{children}</Typography.Paragraph>;
};
