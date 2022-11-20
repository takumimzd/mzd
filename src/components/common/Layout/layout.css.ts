import { style } from "@vanilla-extract/css";

export const layoutStyle = {
  center: style({
    display: "grid",
    placeItems: "center",
    width: "100%",
  }),
  flexbox: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
};
