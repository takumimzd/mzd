import { Typography } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  level: 1 | 2 | 3 | 4 | 5;
}
export const Title = ({ children, style, level }: Props) => {
  return (
    <Typography.Title style={style} level={level}>
      {children}
    </Typography.Title>
  );
};
