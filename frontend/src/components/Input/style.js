import styled from "styled-components";
import { StyledInput } from ".";

export const Input = styled(StyledInput)`
  width: 90%;
  padding: 0.6rem;
  background-color: var(--wine);
  color: var(--grey);
  border: 0.1rem solid var(--wine);
  border-radius: 0.2rem;
  outline: ${(props) => props.outline};
  &:focus {
    outline: 0.1rem solid var(--pink);
  }

  &::placeholder {
    color: var(--pink);
    font-size: 10px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.3rem;
  div {
    width: 93%;
    display: flex;
    flex-direction: column;
  }
`;
