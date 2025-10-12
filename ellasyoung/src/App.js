import './App.css';
import Bungalow from './assets/fonts/bungalow.otf'
import { createGlobalStyle } from "styled-components";
import { offWhite, black } from "./constants/colors";
import HomePage from "./components/content/pages/HomePage";

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: 'Bungalow';
      src: url(${Bungalow});
      font-weight: normal;
      font-style: normal;
  }

  body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: ${black};
    background-color: ${offWhite};
  }
`;

function App() {
  return (
    <>
        <GlobalStyle/>
        <HomePage/>
    </>
  );
}

export default App;
