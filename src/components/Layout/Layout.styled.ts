import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #13292A;
    --secondary-color: #ECECEC;
    --tertiary-color: #988780;
    --blog-wrapper-color: #3D4957;
    --dark-gray-20: #495057;
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
    height: 100%;
    font-family: var(--font-family-primary);
    background-color: var(--secondary-color);
  }

  body {
    line-height: 1.5;
    overflow: auto;
  }

  #__next {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a, a:visited, a:hover {
      text-decoration: none;
  }
`
