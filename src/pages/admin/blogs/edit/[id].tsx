import { Environment } from "@/features/admin/components/environments/blogs/edit/[id]";
import { useGetBlog } from "@/features/blog/hooks/useGetBlog";

const Edit = () => {
  const { blog } = useGetBlog();

  if (!blog) return null;

  return <Environment blog={blog} />;
};

export default Edit;
