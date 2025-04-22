import './App.css';
import HomePage from './components/HomePage';
import SuperSerene from './assets/fonts/SuperSerene.ttf'
import Bungalow from './assets/fonts/bungalow.otf'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'SuperSerene';
    src: url(${SuperSerene});
    font-weight: normal;
    font-style: normal;
  }

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
