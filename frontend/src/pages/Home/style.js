import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 5px;
  font-family: "Comic neue";

  div {
    width: 35%;
    display: flex;
    gap: 1.3rem;
    justify-content: flex-end;
  }

  button{
    font-family: "Comic neue";
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ContainerUl = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5px;
  gap: 10px;
  font-family: "Comic neue";
  li {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    background-color: var(--blue);
    color: var(--pink);
    padding: 0.4rem 0.8rem;
    margin: 20px 0;
  }
`;

export const NamesDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5px;
  font-family: "Comic neue";

  div {
    width: 50%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--blue);
    color: var(--white);
  }
`;
