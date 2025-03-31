import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("# Markdown Preview");

  return (
    <div className="markdown-editor">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="preview">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
