import Link from "next/link";
import profileMainImage from "@/public/profile.webp";
import { listStyle } from "@/features/blog/styles/blog.css";

import { Item, ItemMeta, List } from "@/components/common/List";
import { Avatar } from "@/components/common/Avatar";

import { formatDate } from "@/utils/date/format";

import { BlogType } from "@/types/supabase/table";

interface Props {
  blogs: BlogType[];
  enableEdit: boolean;
}

export const OtherBlogList = ({ blogs, enableEdit }: Props) => (
  <div data-testid="other-blog-list">
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
