import { Timeline as AntdTimeline } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

export const TimelineItem = ({ children, style }: Props) => {
  return <AntdTimeline.Item style={style}>{children}</AntdTimeline.Item>;
};
