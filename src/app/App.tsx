import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import { defaultTheme } from "../Styles/Themes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <h1>Hi, My name is Daniel Jeong</h1>
        <h2>hifaskldjfl</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
