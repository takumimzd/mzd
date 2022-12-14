import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

import { CodeBlock } from ".";
import { setClassToMarkdown } from "./setClassToMarkdown";

type Props = ReactMarkdownOptions;

export const MarkdownView = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const components = {
    code: CodeBlock,
  };

  useEffect(() => {
    if (!ref.current) return;
    setClassToMarkdown(ref.current);
  }, []);

  return (
    <div ref={ref}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
};
