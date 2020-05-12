import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from "styled-components";
import { ButtonPurple, ButtonRed, ButtonBlue } from "./components/componentsStyled";

const ParaStyle = styled.p`
  font-size: 2em;
  color: purple;
  ${props => props.red && css`
    color: red;
  `}
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParaStyle red>
          Teste
        </ParaStyle>
        <ButtonPurple>ButtonPurple</ButtonPurple>
        <ButtonRed>ButtonRed</ButtonRed>
        <ButtonBlue>ButtonBlue</ButtonBlue>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
