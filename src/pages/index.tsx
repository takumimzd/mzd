import React, { useState } from "react";
import Head from "next/head";

import { Image } from "antd";

import profileMainImage from "../../public/profile.webp";

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Head>
        <title>MZD profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          preview={{ visible: false }}
          width={150}
          height={150}
          src={profileMainImage.src}
          alt="profile main image"
          onClick={() => setVisible(true)}
          style={{ borderRadius: "50%" }}
        />
        <div style={{ display: "none", borderRadius: "50%" }}>
          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
          >
            <Image
              src={profileMainImage.src}
              alt="preview profile main image"
            />
          </Image.PreviewGroup>
        </div>
      </div>
    </>
  );
};

export default Home;
