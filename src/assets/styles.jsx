import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SharedBox = styled.div`
  box-shadow: 1px 1px 10px 2px #3a5f5f;
  min-height: 200px;
`;
export const SharedToolbar = styled.div`
  width: 100%;
  background-color: #4aa3a3;
  padding: 0.3rem;
  border: 1px solid #1d2f2f;
  box-shadow: 1px 1px 10px 2px #3a5f5f;
  display: grid;
  align-items: center;
  grid-template-columns: 1rem 1fr 1rem;
  column-gap: 1rem;
`;
export const FCCIcon = styled(FontAwesomeIcon)`
  color: var(--dark-blue);
  border-bottom: 1px solid black;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--dark-blue);
  &:hover {
    color: #57e2b1;
  }
`;
