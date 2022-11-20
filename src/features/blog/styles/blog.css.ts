import {
  BLOG_BACKGROUND_COLOR,
  BOX_SHADOW,
  MARGIN,
  PADDING,
} from "@/constants/style";
import { style } from "@vanilla-extract/css";

export const editStyle = {
  tooltipContainer: style({
    margin: `${MARGIN.L} 0 0 0`,
  }),
  formAndPreviewContainer: style({
    margin: `${MARGIN.M} 0 0 0`,
  }),
  buttonContainer: style({
    display: "flex",
    marginTop: MARGIN.L,
  }),
  saveButtonContainer: style({
    marginRight: MARGIN.S,
  }),
  updateButtonContainer: style({
    marginLeft: MARGIN.S,
  }),
};

export const listStyle = {
  blogItem: style({
    display: "block",
    padding: PADDING.S,
  }),
  techBlogListWrapper: style({
    marginBottom: MARGIN.M,
  }),
};

export const newStyle = {
  form: style({
    "@media": {
      "screen and (min-width: 768px)": {
        width: "700px",
      },
    },
    width: "100%",
  }),
  formItem: style({
    marginBottom: "0",
  }),
};

export const previewStyle = {
  previewWrapper: style({
    "@media": {
      "screen and (min-width: 768px)": {
        width: "700px",
        minHeight: "500px",
      },
    },
    width: "100%",
    minHeight: "300px",
    backgroundColor: BLOG_BACKGROUND_COLOR,
    boxShadow: BOX_SHADOW.MAIN,
    wordBreak: "break-all",
    padding: `${PADDING.M}`,
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
