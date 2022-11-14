import { List as AntdList } from "antd";
import { ListItemLayout } from "antd/lib/list";
import { ReactNode } from "react";

interface Props {
  renderItem: (item: any, index: number) => ReactNode;
  layout: ListItemLayout;
  dataSource: any[];
}

export const List = ({ layout, dataSource, renderItem }: Props) => {
  return (
    <AntdList
      itemLayout={layout}
      dataSource={dataSource}
      renderItem={renderItem}
    />
  );
};
