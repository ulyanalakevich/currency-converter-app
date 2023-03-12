import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: "Montserrat", sans-serif;
    background-image: url("${background}");
    background-position: center;
  }
`;

 export default GlobalStyle;