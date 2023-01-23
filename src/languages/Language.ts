interface LangDescr{
  version: string,
}

interface LanguageListI {
  [countryName: string]: LangDescr;
}

const languageList: LanguageListI = {
  english: {
    version: "0.1",
  },
  korean: {
    version: "0.1",
  },
};

export default languageList