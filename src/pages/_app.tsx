import type { AppProps } from "next/app";
import "antd/dist/antd.css";

import { Layout, Typography } from "antd";
import "../../styles/globals.css";
import "../../styles/extends-antdesign.css";

const { Title } = Typography;
const { Header } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout style={{ background: "#fffcef" }}>
      <Header
        style={{
          height: 32,
          background: "#fffcef",
          borderBottom: "solid 1px black",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Title level={4}>MZD profile</Title>
      </Header>
      <Component {...pageProps} />
    </Layout>
  );
}
