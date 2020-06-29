import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
  :root {
    --main-bg-color: #f0f0f5;
    --main-box-color: 0 0 100px rgba(0, 0, 0, 0.1);
    --main-text-color: #333333;
    --secondary-text-color: #737380;
    --btn-primary: #536DFE;
    --btn-primary-text: #ffffff;
    --btn-back-color: #41414d;
    --border-color: #dcdce6;
    --border-color-hover: #999999;
  
    --main-font-family: "Poppins", sans-serif;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    font-style: normal;
    text-align: left;
    color: var(--main-text-color);
    font-family: var(--main-font-family);
    background-color: var(--main-bg-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ::selection {
    color: var(--btn-primary-text);
    background-color: var(--btn-primary);
  }
  
  a {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
  }
  
  input,
  textarea,
  button {
    font-weight: 400;
    font-size: 18px;
    font-family: var(--main-font-family);
  }
  
  button {
    cursor: pointer;
  }
  
  form {
    input,
    textarea {
      display: block;
      margin-bottom: 1rem;
      width: 100%;
      height: 60px;
      color: var(--main-text-color);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 0 24px;
      transition: all .15s ease-in-out;
      outline: 0;
  
      &:focus {
        box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      }
    }
  
    textarea {
      resize: none;
      min-height: 140px;
      padding: 16px 24px;
      line-height: 24px;
    }
  }
`;
