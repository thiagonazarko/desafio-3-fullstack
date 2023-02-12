import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
     :root{
        --pink: black;
        --blue: #A91E1E;
        --wine: #E10404;
        --grey-1: #F7B05B;
        --white:#fff9f4;
        --background:#1A181B;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, ol, li {
        list-style-type: none;
    }

    button { 
        cursor: pointer;
    }

    body {
        background-color: var(--background);
    }

`;

export const ContainerPages = styled.div`
  font-family: "Comic Neue";
  width: 100%;
  height: 100vh;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  color: var(--white);
  padding: 1.5rem 0;
  border-radius: 0.3rem;
  @media (min-width: 400px) {
    max-width: 370px;
  }
  /* ${(props) => {
    switch (props.page) {
      case "home":
        return css`
          @media (min-width: 800px) {
            max-width: 780px;
          }
        `;
      default:
        return false;
    }
  }} */
`;
