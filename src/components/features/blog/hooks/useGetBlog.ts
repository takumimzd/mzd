import { OtherBlogItems } from "@/assets/blogItems";
import { useRouter } from "next/router";

export const useGetBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = OtherBlogItems.find((blog) => blog.id === Number(id));
  return {
    blog,
    isLoading: !id,
  };
};
