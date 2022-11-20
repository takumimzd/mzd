import { style } from "@vanilla-extract/css";
import { BLOG_BACKGROUND_COLOR, BOX_SHADOW, PADDING } from "@/constants/style";

export const inputStyle = {
  input: style({
    backgroundColor: BLOG_BACKGROUND_COLOR,
    boxShadow: BOX_SHADOW.MAIN,
    padding: `${PADDING.S}`,
    border: "none",
  }),
};
