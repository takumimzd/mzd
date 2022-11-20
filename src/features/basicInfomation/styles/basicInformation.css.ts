import { MARGIN } from "@/constants/style";
import { style as vanilla } from "@vanilla-extract/css";

export const style = {
  myAccountContents: vanilla({
    display: "flex",
  }),
  myAccountItem: vanilla({
    marginBottom: MARGIN.M,
  }),
  myName: vanilla({
    marginRight: MARGIN.XS,
    marginTop: MARGIN.S,
  }),
  description: vanilla({
    textAlign: "center",
    marginBottom: "0",
  }),
};
