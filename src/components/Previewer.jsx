import styled from "styled-components";

const PreviewerBox = styled.div``;
const StyledTextArea = styled.textarea``;
const Previewer = () => {
  return (
    <PreviewerBox>
      <StyledTextArea id="preview" name="preview" placeholder="" />
    </PreviewerBox>
  );
};

export default Previewer;
