import { useGetBlog } from "@/features/blog/hooks/useGetBlog";
import { Template } from "../../templates/[id]";

export const Environment = () => {
  const { blog, isLoading, error } = useGetBlog();

  if (isLoading || !blog || error) return null;

  return <Template blog={blog} />;
};
