import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

type Props = ReactMarkdownOptions;

export const MarkdownView = ({ children }: Props) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
};
