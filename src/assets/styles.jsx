import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SharedBox = styled.div`
  box-shadow: 1px 1px 10px 2px #3a5f5f;
`;
export const SharedToolbar = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #4aa3a3;
  padding: 5px 10px;
  border: 1px solid #1d2f2f;
  box-shadow: 1px 1px 10px 2px #3a5f5f;
  display: grid;
  align-items: center;
  grid-template-columns: 1rem 1fr 1rem;
  column-gap: 10px;
  position: relative;
  z-index: 2;
`;
export const FCCIcon = styled(FontAwesomeIcon)`
  color: var(--dark-blue);
  border-bottom: 1px solid black;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--dark-blue);
  cursor: pointer;
  &:hover {
    color: #57e2b1;
  }
`;
