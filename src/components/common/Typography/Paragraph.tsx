import { ReactNode } from "react";
import { Typography } from "antd";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: Props) => {
  return (
    <Typography.Paragraph className={className}>
      {children}
    </Typography.Paragraph>
  );
};
