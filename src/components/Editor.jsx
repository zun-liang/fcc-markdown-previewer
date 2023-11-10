import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {
  faMaximize,
  faDownLeftAndUpRightToCenter,
} from "@fortawesome/free-solid-svg-icons";

const EditorBox = styled.div`
  width: 600px;
  min-height: 200px;
`;
const Toolbar = styled.div`
  background-color: #4aa3a3;
  padding: 0.3rem;
  border: 1px solid #1d2f2f;
  box-shadow: 1px 1px 10px 2px #3a5f5f;
  display: flex;
`;
const StyledIcon = styled(FontAwesomeIcon)``;
const StyledP = styled.p``;
const StyledTextArea = styled.textarea``;
const Editor = () => {
  return (
    <EditorBox>
      <Toolbar>
        <StyledIcon icon={faFreeCodeCamp} />
        <StyledP>Editor</StyledP>
        <StyledIcon icon={faMaximize} />
        <StyledIcon icon={faDownLeftAndUpRightToCenter} />
      </Toolbar>
      <StyledTextArea id="editor" name="editor" placeholder="" />
    </EditorBox>
  );
};

export default Editor;
