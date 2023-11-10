import styled from "styled-components";

const PreviewerBox = styled.div``;
const StyledTextArea = styled.textarea``;
const Previewer = () => {
  return (
    <PreviewerBox>
      <StyledTextArea id="previewer" name="previewer" placeholder="" />
    </PreviewerBox>
  );
};

export default Previewer;
