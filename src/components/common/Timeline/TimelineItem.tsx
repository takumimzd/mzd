import { Timeline as AntdTimeline } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TimelineItem = ({ children }: Props) => {
  return <AntdTimeline.Item>{children}</AntdTimeline.Item>;
};
