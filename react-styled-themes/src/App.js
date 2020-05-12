import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import Header from "./Header";

const lightTheme = {
  background: '#f9f9f9'
};

const darkTheme = {
  background: '#212121'
};

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? darkTheme : lightTheme);
  };

  return (
    // Fragmento -> <></>
    <>
      <ThemeProvider theme={theme}>
        <Header>
          <h1>School of net Themes</h1>
        </Header>
        <button type="button" onClick={changeTheme}>Change Theme</button>
      </ThemeProvider>
    </>
  );
}

export default App;
