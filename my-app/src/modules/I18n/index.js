import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import raw from './en.json';

const resources = {
    en: JSON.parse(JSON.stringify(raw))
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });


















































