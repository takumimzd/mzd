import { TemplateContainer } from "@/features/blog/components/Edit/Template/TemplateContainer";
import { useGetBlog } from "@/features/blog/hooks/useGetBlog";
import { useIsPcWindow } from "@/hooks/useIsPcWindow";
import { useSession } from "@/hooks/useSession";

const Edit = () => {
  const { blog } = useGetBlog();
  const { isSignedIn } = useSession();
  const { isPc } = useIsPcWindow();

  if (!blog) return null;
  if (!isSignedIn) return null;
  if (isPc === undefined) return null;

  return <TemplateContainer blog={blog} isPc={isPc} />;
};

export default Edit;
