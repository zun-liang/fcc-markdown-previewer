import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { initialText } from "./markdown";

const AppBox = styled.div`
  padding: 1rem;
  width: 100%;
  height: var(--app-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const App = () => {
  const [editorFullSize, setEditorFullSize] = useState(false);
  const handleEditorFullSize = () => setEditorFullSize((prev) => !prev);
  const [previewFullSize, setPreviewFullSize] = useState(false);
  const handlePreviewFullSize = () => setPreviewFullSize((prev) => !prev);

  const [text, setText] = useState(initialText);

  const setAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", setAppHeight);
    setAppHeight();
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  return (
    <main>
      <AppBox>
        <Editor
          editorFullSize={editorFullSize}
          previewFullSize={previewFullSize}
          handleEditorFullSize={handleEditorFullSize}
          text={text}
          setText={setText}
        />
        <Previewer
          editorFullSize={editorFullSize}
          previewFullSize={previewFullSize}
          handlePreviewFullSize={handlePreviewFullSize}
          text={text}
        />
      </AppBox>
    </main>
  );
};

export default App;
