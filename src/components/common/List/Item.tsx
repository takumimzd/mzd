import { List as AntdList } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style: CSSProperties;
}

export const Item = ({ children }: Props) => {
  return <AntdList.Item>{children}</AntdList.Item>;
};
