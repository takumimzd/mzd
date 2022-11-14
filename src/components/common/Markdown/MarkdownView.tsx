import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import { CodeBlock } from "./CodeBlock";

type Props = ReactMarkdownOptions;

export const MarkdownView = ({ children }: Props) => {
  const components = {
    code: CodeBlock,
  };
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
};
