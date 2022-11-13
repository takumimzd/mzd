import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  style?: CSSProperties;
}
export const Center = ({ children, style }: Props) => {
  return (
    <div
      style={{
        ...style,
        display: "grid",
        placeItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
