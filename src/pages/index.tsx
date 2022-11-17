import React from "react";
import Head from "next/head";

import { MARGIN } from "@/constants/style";

import { BasicInfomation } from "@/components/features/basicInfomation";
import { Tabs } from "@/components/features/home/Tabs";

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
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default Home;
