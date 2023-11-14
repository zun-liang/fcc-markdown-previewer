import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {
  faDownLeftAndUpRightToCenter,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  FCCIcon,
  SharedBox,
  SharedToolbar,
  StyledIcon,
} from "../assets/styles";

const EditorBox = styled(SharedBox)`
  width: 80%;
  height: ${({ $fullSize }) => ($fullSize ? "var(--app-height)" : "auto")};
  @media (min-width: 850px) {
    width: 600px;
  }
`;
const Toolbar = styled(SharedToolbar)``;

const StyledP = styled.p``;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: ${({ $fullSize }) =>
    $fullSize ? "calc(var(--app-height) - 2rem)" : "calc(100% - 2rem)"};
  min-height: 200px;
  background-color: var(--light-green);
  box-shadow: 1px 1px 5px 2px var(--dark-green);
  resize: ${({ $fullSize }) => ($fullSize ? "none" : "vertical")};
  overflow-y: scroll;
  outline: none;
  padding: 8px 5px;
  font-size: 0.875rem;
  border: 1px solid var(--very-dark-green);
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
        <EditorBox $fullSize={editorFullSize}>
          <Toolbar>
            <FCCIcon icon={faFreeCodeCamp} />
            <StyledP>Editor</StyledP>
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
