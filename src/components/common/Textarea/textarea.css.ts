import { style } from "@vanilla-extract/css";
import { BLOG_BACKGROUND_COLOR, BOX_SHADOW, PADDING } from "@/constants/style";

export const textareaStyle = {
  textarea: style({
    "@media": {
      "screen and (min-width: 768px)": {
        minHeight: "500px !important",
      },
    },
    minHeight: "300px !important",
    backgroundColor: BLOG_BACKGROUND_COLOR,
    boxShadow: BOX_SHADOW.MAIN,
    padding: `${PADDING.S}`,
    border: "none",
  }),
};
