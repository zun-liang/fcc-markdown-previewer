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
  min-height: 200px;
  max-height: var(--app-height);
`;
const Toolbar = styled(SharedToolbar)``;

const StyledP = styled.p``;
const StyledTextArea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 200px;
  background-color: #c0d8d8;
  overflow-y: scroll;
`;

const Editor = ({ fullSize, handleFullSize, text, setText }) => {
  const handleChange = (e) => setText(e.target.value);
  return (
    <EditorBox>
      <Toolbar>
        <FCCIcon icon={faFreeCodeCamp} />
        <StyledP>Editor</StyledP>
        {fullSize ? (
          <StyledIcon
            icon={faDownLeftAndUpRightToCenter}
            onClick={handleFullSize}
          />
        ) : (
          <StyledIcon icon={faMaximize} onClick={handleFullSize} />
        )}
      </Toolbar>
      <StyledTextArea
        id="editor"
        name="editor"
        value={text}
        onChange={handleChange}
      />
    </EditorBox>
  );
};

export default Editor;
