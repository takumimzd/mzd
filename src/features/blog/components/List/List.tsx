import { listStyle } from "../../styles/blog.css";
import { TechBlogItems } from "@/assets/blog/blogItems";

import { Title } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";
import { List, Item, ItemMeta } from "@/components/common/List";

import { OtherBlogList } from "./OtherBlogList/OtherBlogList";

interface Props {
  enableEdit?: boolean;
}

export const BlogList = ({ enableEdit = false }: Props) => {
  return (
    <>
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
      <OtherBlogList enableEdit={enableEdit} />
    </>
  );
};
