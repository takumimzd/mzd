import { MarkdownView } from "@/components/common/Markdown";
import { useGetBlog } from "@/components/features/blog/hooks/useGetBlog";

const Blog = () => {
  const { blog, isLoading } = useGetBlog();

  if (isLoading) return null;
  if (!blog) return null;

  return (
    <div>
      <p>{blog.title}</p>
      <p>{blog.date}</p>
      <MarkdownView>{blog.body}</MarkdownView>
    </div>
  );
};

export default Blog;
