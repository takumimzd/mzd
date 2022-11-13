import { Center } from "@/components/common/Layout";
import { MarkdownView } from "@/components/common/Markdown";
import { BLOG_BACKGROUND_COLOR, BOX_SHADOW, PADDING } from "@/constants/style";
import { Typography } from "antd";

const { Title } = Typography;

interface Props {
  isPc: boolean;
  bodyText: string;
  title: string;
}

export const Preview = ({ isPc, bodyText, title }: Props) => {
  const previewTitle = !!title ? title : "No Title";
  return (
    <Center>
      <Title level={3}>{previewTitle}</Title>
      <div
        style={{
          width: isPc ? "75%" : "100%",
          minHeight: isPc ? "500px" : "300px",
          backgroundColor: BLOG_BACKGROUND_COLOR,
          boxShadow: BOX_SHADOW.MAIN,
          wordBreak: "break-all",
          padding: `${PADDING.M}`,
        }}
      >
        <MarkdownView>{bodyText}</MarkdownView>
      </div>
    </Center>
  );
};
