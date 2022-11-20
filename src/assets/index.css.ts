import { BOLD_BACKGROUND_COLOR, MARGIN, PADDING } from "@/constants/style";
import { style } from "@vanilla-extract/css";

export const assetsStyle = {
  detailsWrapper: style({
    backgroundColor: BOLD_BACKGROUND_COLOR,
    padding: PADDING.M,
  }),
  ul: style({
    marginBottom: MARGIN.M,
  }),
};
