import Link from "next/link";
import { BlogList } from "@/features/blog/components/ecosystems/blog-list/List";

export const Template = () => {
  return (
    <div>
      <Link href="/admin/blogs/new">
        <p>New</p>
      </Link>
      <BlogList enableEdit />
    </div>
  );
};
