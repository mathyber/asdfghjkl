import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';
import detector from 'i18next-browser-languagedetector';

const DEFAULT_LANGUAGE = 'ru';
const language = localStorage.getItem('i18nextLng') || DEFAULT_LANGUAGE;
const resources = {
    en: {
      translation: '',
    },
    ru: {
      translation: '',
    },
  };
i18n
    .use(backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        whitelist: ['ru', 'en'],
        fallbackLng: language,
        lng: language,
        ns: 'translation',
        defaultNS: 'translation',
        debug: true,
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"]
        },
        backend: {
            loadPath: '/locales/{{lng}}.json'
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: false,
            useSuspense: true
        }
    });

export default i18n 