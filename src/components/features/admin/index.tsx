import Link from "next/link";

export const Admin = () => {
  return (
    <div>
      <Link href="/admin/blogs/new">
        <p>New</p>
      </Link>
    </div>
  );
};
