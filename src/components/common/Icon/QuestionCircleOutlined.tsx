import { QuestionCircleOutlined as Icon } from "@ant-design/icons";
import { CSSProperties } from "react";

interface Props {
  style?: CSSProperties;
}

export const QuestionCircleOutlined = ({ style }: Props) => {
  return <Icon style={style} />;
};
