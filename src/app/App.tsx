import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../hooks/useDarkMode";
import GlobalStyle from "../Styles/GlobalStyle";
import { dark, light } from "../Styles/Themes";

// 다중언어지원 관련 라이브러리
import { useTranslation } from "react-i18next";
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

  const handleLang = (e: React.FormEvent<HTMLSelectElement>) => {
    i18n.changeLanguage((e.target as HTMLInputElement).value);
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
        <label htmlFor="languages">{t("settings.lang")}</label>
        <select name="languages" id="languages" onChange={handleLang}>
          {Object.keys(lngs).map((lng) => (
            <option
              key={lng}
              value={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
            >
              {lngs[lng].nativeName}
            </option>
          ))}
        </select>

        {/* // <button
          //   key={lng}
          //   style={{
          //     fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          //   }}
          //   type="submit"
          //   onClick={() => i18n.changeLanguage(lng)}
          // >

          // </button> */}

        <button onClick={handleClick}>This is a Theme Button</button>
        <h1>{t("description.part1")}</h1>
        <h2>hifaskldjfl</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
