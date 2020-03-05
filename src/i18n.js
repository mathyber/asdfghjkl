import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const DEFAULT_LANGUAGE = window.navigator.language;
const language = localStorage.getItem('i18nextLng') || DEFAULT_LANGUAGE;

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: language,
        lng: language,
        ns: 'translation',
        defaultNS: 'translation',
        keySeparator: false,
        debug: false,
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"]
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true,
            useSuspense: true
        }
    });

export default i18n 