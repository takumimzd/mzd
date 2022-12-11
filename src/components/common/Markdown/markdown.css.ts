import { BORDER_COLOR, PADDING } from "@/constants/style";
import { style as vanilla } from "@vanilla-extract/css";

export const style = {
  code: vanilla({
    margin: "0 0.2em",
    padding: "0.2em 0.4em 0.1em",
    fontSize: "85%",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: "3px",
  }),
  blockquote: vanilla({
    borderLeft: `3px solid ${BORDER_COLOR.MAIN}`,
    padding: `${PADDING.M} 0`,
  }),
  blockquoteP: vanilla({
    paddingLeft: PADDING.L,
    margin: 0,
  }),
};
