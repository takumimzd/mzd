import type { AppProps } from "next/app";
import "antd/dist/antd.css";

import "../../styles/globals.css";
import "../../styles/extends-antdesign.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("../mocks/browser");
  worker.start();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
