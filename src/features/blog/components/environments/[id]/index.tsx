import { useGetBlog } from "@/features/blog/hooks/useGetBlog";
import { Template } from "@/features/blog/components/templates/[id]";

export const Environment = () => {
  const { blog, isLoading, error } = useGetBlog();

  if (isLoading || !blog || error) return null;

  return <Template blog={blog} />;
};
