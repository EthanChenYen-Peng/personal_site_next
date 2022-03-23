import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #EAE0D5;
    --secondary-color: #22333B;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }

  html, body {
    overflow: hidden;
    height: 100vh;
    font-family: 'Work Sans', sans-serif;
    background-color: var(--secondary-color);
  }
`;
