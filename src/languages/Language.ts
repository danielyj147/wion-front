interface LngDescr {
  nativeName: string;
}

interface LngList {
  [countryName: string]: LngDescr;
}

const lngs: LngList = {
  en: {
    nativeName: "English",
  },
  kr: {
    nativeName: "한국어",
  },
};

export { lngs };
