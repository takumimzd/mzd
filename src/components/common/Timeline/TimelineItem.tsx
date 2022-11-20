import { Timeline as AntdTimeline } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const TimelineItem = ({ children, className }: Props) => {
  return (
    <AntdTimeline.Item className={className}>{children}</AntdTimeline.Item>
  );
};
