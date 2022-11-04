import React, { useState } from "react";
import Head from "next/head";

import { Typography } from "antd";

import profileMainImage from "../../public/profile.webp";

import { CircleImage } from "@/components/common/Image/CircleImage";
import { Center } from "@/components/common/Layout/Center";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Head>
        <title>mzd profile</title>
        <meta name="description" content="mzd profire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center margin="32px">
        <div>
          <CircleImage
            src={profileMainImage.src}
            size={{
              width: 150,
              height: 150,
            }}
            alt="profile main image"
          />
          <Center margin="16px 0 0 0">
            <Title level={3}>mzd</Title>
          </Center>
        </div>
      </Center>
    </>
  );
};

export default Home;
