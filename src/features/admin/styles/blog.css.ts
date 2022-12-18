import { MARGIN } from "@/constants/style";
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
