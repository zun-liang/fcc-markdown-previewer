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

const PreviewerBox = styled(SharedBox)`
  width: 800px;
`;
const Toolbar = styled(SharedToolbar)``;
const StyledP = styled.p``;
const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c0d8d8;
`;

const Previewer = ({ fullSize, handleFullSize, text }) => {
  return (
    <PreviewerBox>
      <Toolbar>
        <FCCIcon icon={faFreeCodeCamp} />
        <StyledP>Previewer</StyledP>
        {fullSize ? (
          <StyledIcon
            icon={faDownLeftAndUpRightToCenter}
            onClick={handleFullSize}
          />
        ) : (
          <StyledIcon icon={faMaximize} onClick={handleFullSize} />
        )}
      </Toolbar>
      <PreviewContainer>{text}</PreviewContainer>
    </PreviewerBox>
  );
};

export default Previewer;
