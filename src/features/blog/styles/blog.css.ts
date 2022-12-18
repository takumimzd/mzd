import {
  BLOG_BACKGROUND_COLOR,
  BOX_SHADOW,
  MARGIN,
  PADDING,
} from "@/constants/style";
import { style } from "@vanilla-extract/css";

export const listStyle = {
  blogItem: style({
    display: "block",
    padding: PADDING.S,
  }),
  techBlogListWrapper: style({
    marginBottom: MARGIN.M,
  }),
};

export const indexStyle = {
  wrapper: style({
    margin: MARGIN.L,
  }),
  blogTitle: style({
    marginTop: MARGIN.M,
  }),
  breadcrumbItemText: style({
    marginLeft: MARGIN.S,
  }),
  markdownViewContainer: style({
    margin: `${MARGIN.L} 0 ${MARGIN.L} 0`,
    backgroundColor: BLOG_BACKGROUND_COLOR,
    boxShadow: BOX_SHADOW.MAIN,
    wordBreak: "break-all",
    padding: `${PADDING.M}`,
    width: "100%",
    "@media": {
      "screen and (min-width: 768px)": {
        width: "700px",
      },
    },
  }),
};
