import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import { light, dark } from "../Styles/Themes";

function App() {
  const [theme, setTheme] = useState(light);

  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <h1>Hi, My name is Daniel Jeong</h1>
        <h2>hifaskldjfl</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
