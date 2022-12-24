import type { AppProps } from "next/app";
import "antd/dist/antd.css";

import "../../styles/globals.css";
import "../../styles/extends-antdesign.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
