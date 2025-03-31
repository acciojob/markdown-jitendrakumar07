import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import "../styles.css"; // Fix incorrect import

const App = () => {
  return (
    <div className="app">
      <h1>Markdown Editor</h1>
      <MarkdownEditor />
    </div>
  );
};

export default App;
