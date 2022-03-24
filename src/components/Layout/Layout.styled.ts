import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #EAE0D5;
    --secondary-color: #22333B;
    --font-family-primary: 'Work Sans', sans-serif;
    --font-family-secondary: 'Poppins', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }

  html, body {
    height: 100vh;
    font-family: var(--font-family-primary);
    background-color: var(--secondary-color);
  }

  a, a:visited, a:hover {
      text-decoration: none;
  }
`;
