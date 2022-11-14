import React from "react";
import Head from "next/head";

import { MARGIN } from "@/constants/style";

import { Profile } from "@/components/features/profile";
import { BlogList } from "@/components/features/blog/List/List";
import { BasicInfomation } from "@/components/features/basicInfomation";
import { Tabs } from "@/components/common/Tab";

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

const Home = () => {
  return (
    <>
      <Head>
        <title>mzd profile</title>
        <meta name="description" content="mzd profire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ margin: MARGIN.L }}>
        <BasicInfomation />
        <div style={{ marginTop: MARGIN.L }}>
          <Tabs items={TabItems} />
        </div>
      </div>
    </>
  );
};

export default Home;
