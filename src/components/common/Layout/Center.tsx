import React from "react";
import { layoutStyle } from "./layout.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const Center = ({ children, className }: Props) => {
  return <div className={`${className} ${layoutStyle.center}`}>{children}</div>;
};
