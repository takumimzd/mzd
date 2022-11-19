import { MARGIN, PADDING } from "@/constants/style";
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
      <OtherBlogList enableEdit={enableEdit} />
    </>
  );
};
