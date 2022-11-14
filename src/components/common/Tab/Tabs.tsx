import { Tabs as AntdTabs } from "antd";
import { ReactNode } from "react";

interface TabItemTypes {
  children: ReactNode;
  label: string;
  key: string;
}

interface Props {
  items: TabItemTypes[];
}
export const Tabs = ({ items }: Props) => {
  return <AntdTabs items={items} />;
};
