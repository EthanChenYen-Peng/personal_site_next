import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400&family=Poppins:wght@400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
    font-family: 'Work Sans', sans-serif;
  }

`;
