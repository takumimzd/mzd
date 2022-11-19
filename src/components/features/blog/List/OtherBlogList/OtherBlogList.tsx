import Link from "next/link";
import profileMainImage from "@/public/profile.webp";
import { PADDING } from "@/constants/style";

import { Item, ItemMeta, List } from "@/components/common/List";
import { Title } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";

import { useGetBlogs } from "@/components/features/blog/hooks/useGetBlogs";

import { formatDate } from "@/utils/date/format";

interface Props {
  enableEdit: boolean;
}

export const OtherBlogList = ({ enableEdit }: Props) => {
  const { blogs, isLoading, error } = useGetBlogs();
  if (error || isLoading) return null;

  return (
    <div>
      <Title level={3}>Other</Title>
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
            style={{ display: "block", padding: PADDING.S }}
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
