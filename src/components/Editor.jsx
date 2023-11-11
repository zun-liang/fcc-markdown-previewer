/* eslint-disable react/prop-types */
import styled from "styled-components";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {
  faMaximize,
  faDownLeftAndUpRightToCenter,
} from "@fortawesome/free-solid-svg-icons";
import {
  FCCIcon,
  StyledIcon,
  SharedBox,
  SharedToolbar,
} from "../assets/styles";

const EditorBox = styled(SharedBox)`
  width: 600px;
  height: ${({ $fullSize }) => ($fullSize ? "100%" : "auto")};
  max-height: var(--app-height);
`;
const Toolbar = styled(SharedToolbar)``;

const StyledP = styled.p``;
const StyledTextArea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 200px;
  height: calc(100% - 2rem);
  background-color: #c0d8d8;
  overflow-y: scroll;
  outline: none;
  padding: 5px;
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
          />
        </EditorBox>
      )}
    </>
  );
};

export default Editor;
