/* eslint-disable react/prop-types */
import styled from "styled-components";
import { marked } from "marked";
import parse from "html-react-parser";
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

const PreviewerBox = styled(SharedBox)`
  width: 800px;
  height: auto;
`;
const Toolbar = styled(SharedToolbar)`
  border: 1px solid #1d2f2f;
`;
const StyledP = styled.p``;
const PreviewContainer = styled.div`
  width: 100%;
  height: calc(auto - 2rem);
  background-color: #c0d8d8;
  padding: 2rem 1rem;
  font-family: sans-serif;
  line-height: 1.5;
`;

const Previewer = ({
  editorFullSize,
  previewFullSize,
  handlePreviewFullSize,
  text,
}) => {
  return (
    <>
      {!editorFullSize && (
        <PreviewerBox $fullSize={previewFullSize}>
          <Toolbar>
            <FCCIcon icon={faFreeCodeCamp} />
            <StyledP>Previewer</StyledP>
            {previewFullSize ? (
              <StyledIcon
                icon={faDownLeftAndUpRightToCenter}
                onClick={handlePreviewFullSize}
              />
            ) : (
              <StyledIcon icon={faMaximize} onClick={handlePreviewFullSize} />
            )}
          </Toolbar>
          <PreviewContainer id="preview">
            {parse(marked.parse(text))}
          </PreviewContainer>
        </PreviewerBox>
      )}
    </>
  );
};

export default Previewer;
