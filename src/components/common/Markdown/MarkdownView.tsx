import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

type Props = ReactMarkdownOptions;

export const MarkdownView = ({ children }: Props) => {
  return <ReactMarkdown>{children}</ReactMarkdown>;
};
