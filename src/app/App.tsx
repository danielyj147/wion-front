import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import { light, dark } from "../Styles/Themes";
import { useDarkMode } from "../hooks/useDarkMode";
import { useTranslation, Trans } from "react-i18next";
import { lngs } from "../languages/Language";

function App() {
  // 상수, 변수, 훅
  // 18
  const { t, i18n } = useTranslation();
  const [mode, toggleMode] = useDarkMode();
  const [theme, setTheme] = useState(mode === "dark" ? dark : light);

  // 핸들러
  const handleClick = () => {
    toggleMode();
  };

  // 이펙트
  useEffect(() => {
    setTheme(mode === "dark" ? dark : light);
    return () => {};
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <>
          {/* <></> 안에 맵핑을한 이유: 리액트 18 타입스크립트에서 흔히 나타나는 문제로 여러개의 unknown이 발생할 수 있을 때 일어나는 문제*/}
          {Object.keys(lngs).map((lng) => {
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>;
          })}
        </>
        <button onClick={handleClick}>This is a Theme Button</button>
        <h1>{t("description.part1")}</h1>
        <h2>hifaskldjfl</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
