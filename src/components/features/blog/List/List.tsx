import Link from "next/link";
import { Avatar, List, Typography } from "antd";
import { MARGIN, PADDING } from "@/constants/style";

import { TechBlogItems, OtherBlogItems } from "@/assets/blog/blogItems";

const { Title } = Typography;

export const BlogList = () => {
  return (
    <>
      <div style={{ marginBottom: MARGIN.M }}>
        <Title level={3}>Tech</Title>
        <List
          itemLayout="horizontal"
          dataSource={TechBlogItems}
          renderItem={(item) => (
            <List.Item style={{ display: "block", padding: PADDING.S }}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <List.Item.Meta
                  avatar={<Avatar src={item.icon} />}
                  title={item.title}
                  description={item.date}
                />
              </a>
            </List.Item>
          )}
        />
      </div>
      <Title level={3}>Other</Title>
      <List
        itemLayout="horizontal"
        dataSource={OtherBlogItems}
        renderItem={(item) => (
          <List.Item style={{ display: "block", padding: PADDING.S }}>
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
