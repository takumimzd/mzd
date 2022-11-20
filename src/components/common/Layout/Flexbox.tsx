import React from "react";
import { layoutStyle } from "./layout.css";

interface Props {
  children: React.ReactNode;
}
export const Flexbox = ({ children }: Props) => {
  return <div className={layoutStyle.flexbox}>{children}</div>;
};
