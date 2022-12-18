import Head from "next/head";

import { Center } from "@/components/common/Layout";
import { homeStyle } from "@/features/home/styles/home.css";

import { BasicInformation } from "@/features/home/components/ecosystems/basicInformation";
import { Tabs } from "@/features/home/components/ecosystems/Tabs";

export const Template = () => {
  return (
    <Center>
      <Head>
        <title>mzd profile</title>
        <meta name="description" content="mzd profire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyle.wrapper}>
        <BasicInformation />
        <div className={homeStyle.tabWrapper}>
          <Tabs />
        </div>
      </div>
    </Center>
  );
};
