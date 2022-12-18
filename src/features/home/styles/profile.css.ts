import { style } from "@vanilla-extract/css";
import { BOLD_BACKGROUND_COLOR, MARGIN, PADDING } from "@/constants/style";

export const profileStyle = {
  carrerItem: style({
    paddingBottom: "0",
  }),
  carrerText: style({
    fontSize: "16px",
    fontWeight: "bold",
  }),
  skillsText: style({
    fontSize: "16px",
    fontWeight: "bold",
  }),
};

export const carrerItemStyle = {
  detailsWrapper: style({
    backgroundColor: BOLD_BACKGROUND_COLOR,
    padding: PADDING.M,
    maxWidth: "650px",
  }),
  textIndent: style({
    textIndent: "1rem",
  }),
  ul: style({
    marginBottom: MARGIN.M,
  }),
};
