import styled from "styled-components";

const EditorBox = styled.div`
  width: 600px;
  min-height: 200px;
`;
const Toolbar = styled.div``;
const StyledTextArea = styled.textarea``;
const Editor = () => {
  return (
    <EditorBox>
      <Toolbar></Toolbar>
      <StyledTextArea id="editor" name="editor" placeholder="" />
    </EditorBox>
  );
};

export default Editor;
