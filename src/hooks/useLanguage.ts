import { useState } from "react";

const useLanguage = () => {
  let storedLanguage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    storedLanguage ? storedLanguage : "Korean"
  );

  const selectLanguage = () => {};

  return [language, selectLanguage] as const;
};

export default useLanguage;
