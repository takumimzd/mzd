import Link from "next/link";
import { useSession } from "src/hooks/useSession";

const Admin = () => {
  const { isSignedIn } = useSession();
  if (!isSignedIn) {
    window.location.href = "/";
  }
  return (
    <div>
      <Link href="/admin/new">
        <p>New</p>
      </Link>
    </div>
  );
};

export default Admin;
