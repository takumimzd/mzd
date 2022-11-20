import { List as AntdList } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  actions?: ReactNode[];
}

export const Item = ({ children, actions, className }: Props) => {
  return (
    <AntdList.Item actions={actions} className={className}>
      {children}
    </AntdList.Item>
  );
};
