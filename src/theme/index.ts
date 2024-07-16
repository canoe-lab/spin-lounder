import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 2em;
    text-align: center;
    font-family: 'Poppins', sans-serif; 
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
