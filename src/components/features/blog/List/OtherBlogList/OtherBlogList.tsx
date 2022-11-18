import Link from "next/link";
import { PADDING } from "@/constants/style";

import { Item, ItemMeta, List } from "@/components/common/List";
import { Title } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";
import { useGetBlogs } from "@/hooks/useGetBlogs";

export const OtherBlogList = () => {
  const { blogs, isLoading, error } = useGetBlogs();

  if (isLoading) return null;
  if (error) return null;

  return (
    <div>
      <Title level={3}>Other</Title>
      <List
        layout="horizontal"
        dataSource={blogs}
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
    </div>
  );
};
