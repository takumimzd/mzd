import Link from "next/link";
import profileMainImage from "@/public/profile.webp";
import { listStyle } from "@/features/blog/styles/blog.css";

import { Item, ItemMeta, List } from "@/components/common/List";
import { Title } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";
import { Skeleton } from "@/components/common/Skeleton";

import { useGetBlogs } from "@/features/blog/hooks/useGetBlogs";

import { formatDate } from "@/utils/date/format";

interface Props {
  enableEdit: boolean;
}

export const OtherBlogList = ({ enableEdit }: Props) => {
  const { blogs, isLoading, error } = useGetBlogs();

  if (isLoading) return <Skeleton avatar paragraph={{ rows: 1 }} />;
  if (error) return null;

  return (
    <div>
      <Title level={2}>Other</Title>
      <List
        layout="horizontal"
        dataSource={blogs}
        renderItem={(item) => (
          <Item
            actions={
              enableEdit
                ? [
                    <Link
                      key={`blog-edit-action-${item.id}`}
                      href={`admin/blogs/edit/${item.id}`}
                    >
                      edit
                    </Link>,
                  ]
                : []
            }
            className={listStyle.blogItem}
          >
            <Link href={`blogs/${item.id}`}>
              <ItemMeta
                avatar={
                  <Avatar src={item.icon ? item.icon : profileMainImage.src} />
                }
                title={item.title}
                description={formatDate({ date: new Date(item.createdAt) })}
              />
            </Link>
          </Item>
        )}
      />
    </div>
  );
};
