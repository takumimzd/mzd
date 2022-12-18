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
