import React from "react";

interface Props {
  children: React.ReactNode;
  margin?: string;
}
export const Center = ({ children, margin = "0" }: Props) => {
  return (
    <div
      style={{
        margin,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
