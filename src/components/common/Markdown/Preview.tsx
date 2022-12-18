import { previewStyle } from "./markdown.css";
import { Center } from "@/components/common/Layout";
import { MarkdownView } from "@/components/common/Markdown";
import { Title } from "@/components/common/Typography";

interface Props {
  bodyText: string;
  title: string;
}

export const Preview = ({ bodyText, title }: Props) => {
  const previewTitle = !!title ? title : "No Title";
  return (
    <Center>
      <Title level={3}>{previewTitle}</Title>
      <div className={previewStyle.previewWrapper}>
        <MarkdownView>{bodyText}</MarkdownView>
      </div>
    </Center>
  );
};
