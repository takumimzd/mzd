import { Title } from "@/components/common/Typography";
import { OtherBlogListContainer } from "./other-blog-list/OtherBlogListContainer";

interface Props {
  enableEdit: boolean;
}

export const OtherBlog = ({ enableEdit }: Props) => {
  return (
    <div>
      <Title level={2}>Other</Title>
      <OtherBlogListContainer enableEdit={enableEdit} />
    </div>
  );
};
