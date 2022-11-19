import React from "react";
import Head from "next/head";

import { MARGIN } from "@/constants/style";

import { BasicInfomation } from "@/features/basicInfomation/components";
import { Tabs } from "@/features/home/components/Tabs";

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
