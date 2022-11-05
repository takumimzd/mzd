import React from "react";
import Head from "next/head";

import profileMainImage from "../../public/profile.webp";

import { Typography } from "antd";

import { CircleImage } from "@/components/common/Image/CircleImage";
import { Center } from "@/components/common/Layout/Center";
import { BlogList } from "@/components/domain/blog/List/List";

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <>
      <Head>
        <title>mzd profile</title>
        <meta name="description" content="mzd profire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ margin: "32px" }}>
        <Center>
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
        <Center>
          <Paragraph>
            Software Developer / Frontend / Typescript / React / Next
          </Paragraph>
        </Center>
        <div style={{ marginTop: "32px" }}>
          <BlogList />
        </div>
      </div>
    </>
  );
};

export default Home;
