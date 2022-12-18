import { Tabs as CommonTabs } from "@/components/common/Tab";

import { Profile } from "@/features/home/components/ecosystems/profile";
import { BlogList } from "@/features/blog/components/ecosystems/blog-list/List";
import { Environment } from "@/features/admin/components/environments";

import { useSession } from "@/hooks/useSession";

export const Tabs = () => {
  const { isSignedIn } = useSession();
  const TabItems = [
    {
      label: "Profile",
      key: "profile",
      children: (
        <>
          <Profile />
        </>
      ),
    },
    {
      label: "Blog",
      key: "blog",
      children: (
        <>
          <BlogList />
        </>
      ),
    },
  ];

  if (isSignedIn) {
    TabItems.push({
      label: "Admin",
      key: "admin",
      children: (
        <>
          <Environment />
        </>
      ),
    });
  }

  return <CommonTabs items={TabItems} />;
};
