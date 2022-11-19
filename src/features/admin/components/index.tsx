import Link from "next/link";
import { BlogList } from "../../blog/components/List/List";

export const Admin = () => {
  return (
    <div>
      <Link href="/admin/blogs/new">
        <p>New</p>
      </Link>
      <BlogList enableEdit />
    </div>
  );
};
