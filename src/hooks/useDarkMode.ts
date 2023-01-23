import { useState } from "react";
import { ThemeI } from "../Styles/Themes";

export const useDarkMode = () => {
  // 유저의 기본 설정이 다크 모드인지 확인
  // 모바일 환경에서도 작동하는지 확인 해야함
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  let initTheme = isBrowserDarkMode ? "dark" : "light";

  // 사용자가 테마 설정을 직접 지정한 테마가 있는지 확인
  // 여기서 localStorage란 후에 테마를 저장할 Redux storage를 의미
  const localSettingTheme = localStorage.getItem("theme");

  if (localSettingTheme) {
    initTheme = localSettingTheme;
  }

  const [theme, setTheme] = useState(initTheme);

  const setMode = (mode: ThemeI["list"]) => {
    // 테마정보 변경하면 localstorage 에 저장해 다음에도 지정한 값으로 테마가 보이도록 설정
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => setMode(theme === "light" ? "dark" : "light");

  return [theme, toggleTheme] as const;
};
