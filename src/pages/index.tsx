import React from "react";
import Head from "next/head";
import { homeStyle } from "../features/home/styles/home.css";

import { Center } from "@/components/common/Layout";

import { BasicInfomation } from "@/features/basicInfomation/components";
import { Tabs } from "@/features/home/components/Tabs";

const Home = () => {
  return (
    <Center>
      <Head>
        <title>mzd profile</title>
        <meta name="description" content="mzd profire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyle.wrapper}>
        <BasicInfomation />
        <div className={homeStyle.tabWrapper}>
          <Tabs />
        </div>
      </div>
    </Center>
  );
};

export default Home;
