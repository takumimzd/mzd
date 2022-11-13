import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  style: CSSProperties;
}
export const Flexbox = ({ children, style }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
