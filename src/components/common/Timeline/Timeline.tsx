import { Timeline as AntdTimeline } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Timeline = ({ children }: Props) => {
  return <AntdTimeline>{children}</AntdTimeline>;
};
