import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import { light, dark } from "../Styles/Themes";
import { useDarkMode } from "../hooks/useDarkMode";

function App() {
  const [mode, toggleMode] = useDarkMode();
  const [theme, setTheme] = useState(mode === "dark" ? dark : light);

  const handleClick = () => {
    toggleMode();
  };

  useEffect(() => {
    setTheme(mode === "dark" ? dark : light);

    return () => {};
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <button onClick={handleClick}>This is a Theme Button</button>
        <h1>Hi, My name is Daniel Jeong</h1>
        <h2>hifaskldjfl</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
