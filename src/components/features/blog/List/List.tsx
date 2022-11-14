import Link from "next/link";
import { MARGIN, PADDING } from "@/constants/style";
import { TechBlogItems, OtherBlogItems } from "@/assets/blog/blogItems";

import { Title } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";
import { List, Item, ItemMeta } from "@/components/common/List";

export const BlogList = () => {
  return (
    <>
      <div style={{ marginBottom: MARGIN.M }}>
        <Title level={3}>Tech</Title>
        <List
          layout="horizontal"
          dataSource={TechBlogItems}
          renderItem={(item) => (
            <Item style={{ display: "block", padding: PADDING.S }}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <ItemMeta
                  avatar={<Avatar src={item.icon} />}
                  title={item.title}
                  description={item.date}
                />
              </a>
            </Item>
          )}
        />
      </div>
      <Title level={3}>Other</Title>
      <List
        layout="horizontal"
        dataSource={OtherBlogItems}
        renderItem={(item) => (
          <Item style={{ display: "block", padding: PADDING.S }}>
            <Link href={`blogs/${item.link}`}>
              <ItemMeta
                avatar={<Avatar src={item.icon} />}
                title={item.title}
                description={item.date}
              />
            </Link>
          </Item>
        )}
      />
    </>
  );
};
