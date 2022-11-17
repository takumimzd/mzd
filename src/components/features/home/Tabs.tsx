import { Tabs as CommonTabs } from "@/components/common/Tab";

import { Profile } from "@/components/features/profile";
import { BlogList } from "@/components/features/blog/List/List";
import { Admin } from "@/components/features/admin";

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
          <Admin />
        </>
      ),
    });
  }

  return <CommonTabs items={TabItems} />;
};
