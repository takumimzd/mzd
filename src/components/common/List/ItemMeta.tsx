import { List as AntdList } from "antd";
import { ReactNode } from "react";

interface Props {
  avatar: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

export const ItemMeta = ({ avatar, title, description }: Props) => {
  return (
    <AntdList.Item.Meta
      avatar={avatar}
      title={title}
      description={description}
    />
  );
};
