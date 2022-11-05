import React from "react";
import Head from "next/head";

import { BlogList } from "@/components/features/blog/List/List";
import { BasicInfomation } from "@/components/features/basicInfomation";

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
          <BlogList />
        </div>
      </div>
    </>
  );
};

export default Home;
