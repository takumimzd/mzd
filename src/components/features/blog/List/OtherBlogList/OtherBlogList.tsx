import Link from "next/link";
import profileMainImage from "@/public/profile.webp";
import { PADDING } from "@/constants/style";

import { Item, ItemMeta, List } from "@/components/common/List";
import { Title } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";

import { useGetBlogs } from "@/components/features/blog/hooks/useGetBlogs";

export const OtherBlogList = () => {
  const { blogs, isLoading, error } = useGetBlogs();
  if (error || isLoading) return null;

  return (
    <div>
      <Title level={3}>Other</Title>
      <List
        layout="horizontal"
        dataSource={blogs}
        renderItem={(item) => (
          <Item style={{ display: "block", padding: PADDING.S }}>
            <Link href={`blogs/${item.id}`}>
              <ItemMeta
                avatar={
                  <Avatar src={item.icon ? item.icon : profileMainImage.src} />
                }
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
