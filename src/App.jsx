import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./App.css";
import styled from "styled-components";
import { useEffect } from "react";

const AppBox = styled.div`
  width: 100%;
  height: var(--app-height);
  border: 1px solid red;
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
