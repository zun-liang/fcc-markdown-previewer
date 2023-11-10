import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

const AppBox = styled.div`
  width: 100%;
  height: var(--app-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const App = () => {
  const [fullSize, setFullSize] = useState(false);
  const handleFullSize = () => setFullSize((prev) => !prev);

  const initialText = "";
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
          fullSize={fullSize}
          handleFullSize={handleFullSize}
          text={text}
          setText={setText}
        />
        <Previewer
          fullSize={fullSize}
          handleFullSize={handleFullSize}
          text={text}
        />
      </AppBox>
    </main>
  );
};

export default App;
