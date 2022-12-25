import { Skeleton } from "@/components/common/Skeleton";
import { useGetBlogs } from "@/features/blog/hooks/useGetBlogs";
import { OtherBlogList } from "./OtherBlogList";

interface Props {
  enableEdit: boolean;
}

export const OtherBlogListContainer = ({ enableEdit }: Props) => {
  const { blogs, isLoading, error } = useGetBlogs();

  if (isLoading)
    return (
      <div data-testid="other-blog-list-loading">
        <Skeleton avatar paragraph={{ rows: 1 }} />
      </div>
    );

  if (error)
    return (
      <p data-testid="other-blog-list-error">
        ブログの取得に失敗しました。時間を置いてもう一度お試しください。
      </p>
    );

  return <OtherBlogList enableEdit={enableEdit} blogs={blogs} />;
};
