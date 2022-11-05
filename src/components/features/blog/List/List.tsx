import { Avatar, List } from "antd";
import { BlogItems } from "@/assets/blogItems";

export const BlogList = () => {
  const blogItemOnClick = ({ link }: { link: string }) => {
    window.open(link, "_blank");
  };
  return (
    <List
      itemLayout="horizontal"
      dataSource={BlogItems}
      renderItem={(item) => (
        <List.Item onClick={() => blogItemOnClick({ link: item.link })}>
          <List.Item.Meta
            avatar={<Avatar src={item.icon} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};
