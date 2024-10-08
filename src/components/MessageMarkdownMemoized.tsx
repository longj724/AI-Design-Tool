// External Dependencies
import { type FC, memo } from 'react';
import ReactMarkdown, { type Options } from 'react-markdown';

const MessageMarkdownMemoized: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
);

export default MessageMarkdownMemoized;
