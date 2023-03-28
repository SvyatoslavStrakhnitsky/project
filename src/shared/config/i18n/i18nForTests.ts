import i18nForTests from 'i18next';
import { initReactI18next } from 'react-i18next';

i18nForTests
    .use(initReactI18next)
    .init({
        lng: 'uk',
        fallbackLng: 'uk',
        ns: ['translationsNS'],
        defaultNS: 'translationsNS',
        debug: true,
        resources: { en: { translationsNS: {} } },
    });

export default i18nForTests;