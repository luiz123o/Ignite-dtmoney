import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    background: ${theme.colors.background};
    -webkit-font-smothing: antialiased;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  button {
    cursor: pointer;
  }

  input,
  button {
    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;

    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    max-width: 576px;
    width: 100%;

    background: ${theme.colors.background};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    border: 0;
    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  }
`}


`
