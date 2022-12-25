import { listStyle } from "@/features/blog/styles/blog.css";
import { TechBlogItems } from "@/features/blog/constants/blogItems";

import { Title } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";
import { List, Item, ItemMeta } from "@/components/common/List";

import { OtherBlog } from "./other-blog/OtherBlog";

interface Props {
  enableEdit?: boolean;
}

export const BlogList = ({ enableEdit = false }: Props) => {
  return (
    <div>
      <div className={listStyle.techBlogListWrapper}>
        <Title level={2}>Tech</Title>
        <List
          layout="horizontal"
          dataSource={TechBlogItems}
          renderItem={(item) => (
            <Item className={listStyle.blogItem}>
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
      <OtherBlog enableEdit={enableEdit} />
    </div>
  );
};
