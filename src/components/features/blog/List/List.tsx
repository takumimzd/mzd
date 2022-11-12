import Link from "next/link";
import { Avatar, List, Typography } from "antd";
import { TechBlogItems, OtherBlogItems } from "@/assets/blogItems";

const { Title } = Typography;

export const BlogList = () => {
  const blogItemOnClick = ({ link }: { link: string }) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <Title level={3}>Tech Blog</Title>
        <List
          itemLayout="horizontal"
          dataSource={TechBlogItems}
          renderItem={(item) => (
            <List.Item
              style={{ cursor: "pointer" }}
              onClick={() => blogItemOnClick({ link: item.link })}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.icon} />}
                title={item.title}
                description={item.date}
              />
            </List.Item>
          )}
        />
      </div>
      <Title level={3}>Other Blog</Title>
      <List
        itemLayout="horizontal"
        dataSource={OtherBlogItems}
        renderItem={(item) => (
          <List.Item style={{ display: "block" }}>
            <Link href={`blogs/${item.link}`}>
              <List.Item.Meta
                avatar={<Avatar src={item.icon} />}
                title={item.title}
                description={item.date}
              />
            </Link>
          </List.Item>
        )}
      />
    </>
  );
};
