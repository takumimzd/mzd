import { TemplateContainer } from "@/features/blog/components/Edit/Template/TemplateContainer";

import { useGetBlog } from "@/features/blog/hooks/useGetBlog";
import { useSession } from "@/hooks/useSession";

const Edit = () => {
  const { blog } = useGetBlog();
  const { isSignedIn } = useSession();

  if (!blog) return null;
  if (!isSignedIn) return null;

  return <TemplateContainer blog={blog} />;
};

export default Edit;
