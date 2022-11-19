import { List as AntdList } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style: CSSProperties;
  actions?: ReactNode[];
}

export const Item = ({ children, actions }: Props) => {
  return <AntdList.Item actions={actions}>{children}</AntdList.Item>;
};
