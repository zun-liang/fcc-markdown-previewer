import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./App.css";
import styled from "styled-components";
import { useEffect } from "react";

const AppBox = styled.div`
  width: 100%;
  height: var(--app-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
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
        <Editor />
        <Previewer />
      </AppBox>
    </main>
  );
};

export default App;
