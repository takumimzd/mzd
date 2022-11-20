import { ReactNode } from "react";
import { Typography } from "antd";

interface Props {
  children: ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
}
export const Title = ({ children, level, className }: Props) => {
  return (
    <Typography.Title className={className} level={level}>
      {children}
    </Typography.Title>
  );
};
