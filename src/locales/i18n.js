import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en/translation.en.js";
import translationRu from "./ru/translation.ru.js";
import translationUz from "./uz/translation.uz.js";
i18next.use(initReactI18next).init({
  escapeValue: false,
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
    uz: {
      translation: translationUz,
    },
  },
});
