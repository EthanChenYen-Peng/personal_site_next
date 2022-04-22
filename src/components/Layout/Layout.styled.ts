import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ECECEC;
    --secondary-color: #282E3A;
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
    overflow-x: hidden;
  }

  body {
    line-height: 1.5;
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
