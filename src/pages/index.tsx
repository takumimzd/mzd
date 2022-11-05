import React from "react";
import Head from "next/head";

import { Tabs } from "antd";
import { BasicInfomation } from "@/components/features/basicInfomation";
import { Profile } from "@/components/features/profile";
import { BlogList } from "@/components/features/blog/List/List";

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
      <div style={{ margin: "32px" }}>
        <BasicInfomation />
        <div style={{ marginTop: "24px" }}>
          <Tabs items={TabItems} />
        </div>
      </div>
    </>
  );
};

export default Home;
