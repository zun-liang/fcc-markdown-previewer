import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Toolbar = styled.div`
  width: 100%;
  height: 2rem;
  background-color: var(--green);
  padding: 5px 10px;
  border-top: 1px solid var(--very-dark-green);
  border-left: 1px solid var(--very-dark-green);
  border-right: 1px solid var(--very-dark-green);
  box-shadow: 1px 1px 5px 2px var(--dark-green);
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
