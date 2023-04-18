import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (lng: string, ns: string) =>
        import(`../../../../public/locales/${lng}/${ns}.json`)
    )
  )
  .init({
    fallbackLng: 'en',
    lng: 'en',
    debug: true, // change to true on push
    // react: {
    //   useSuspense: false,
    // },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
  })

export default i18n
