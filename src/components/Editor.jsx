import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {
  faDownLeftAndUpRightToCenter,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { FCCIcon, Toolbar, StyledIcon } from "../assets/styles";

const EditorBox = styled.div`
  width: 80%;
  @media (min-width: 850px) {
    width: 600px;
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: ${({ $fullSize }) =>
    $fullSize ? "calc(var(--app-height) - 2rem)" : "calc(100% - 2rem)"};
  min-height: 200px;
  padding: 8px 5px;
  background-color: var(--light-green);
  box-shadow: 1px 1px 5px 2px var(--dark-green);
  border: 1px solid var(--very-dark-green);
  outline: none;
  resize: ${({ $fullSize }) => ($fullSize ? "none" : "vertical")};
  overflow-y: auto;
  font-size: 0.875rem;
`;

const Editor = ({
  editorFullSize,
  previewFullSize,
  handleEditorFullSize,
  text,
  setText,
}) => {
  const handleChange = (e) => setText(e.target.value);
  return (
    <>
      {!previewFullSize && (
        <EditorBox>
          <Toolbar>
            <FCCIcon icon={faFreeCodeCamp} />
            <p>Editor</p>
            {editorFullSize ? (
              <StyledIcon
                icon={faDownLeftAndUpRightToCenter}
                onClick={handleEditorFullSize}
              />
            ) : (
              <StyledIcon icon={faMaximize} onClick={handleEditorFullSize} />
            )}
          </Toolbar>
          <StyledTextArea
            id="editor"
            name="editor"
            value={text}
            onChange={handleChange}
            $fullSize={editorFullSize}
          />
        </EditorBox>
      )}
    </>
  );
};

export default Editor;
