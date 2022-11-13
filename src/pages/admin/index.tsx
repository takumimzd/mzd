import Link from "next/link";
import { useSession } from "src/hooks/useSession";

const Admin = () => {
  const { isSignedIn } = useSession();
  if (!isSignedIn) return null;
  return (
    <div>
      <Link href="/admin/blogs/new">
        <p>New</p>
      </Link>
    </div>
  );
};

export default Admin;
