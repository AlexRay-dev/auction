import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: #fff;
    color: ${({theme}) => theme.colors.font};
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;