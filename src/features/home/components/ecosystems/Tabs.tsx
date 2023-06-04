import { Tabs as CommonTabs } from "@/components/common/Tab";

import { Profile } from "@/features/home/components/ecosystems/profile";
import { BlogList } from "@/features/blog/components/ecosystems/blog-list/List";

export const Tabs = () => {
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

  return <CommonTabs items={TabItems} />;
};
