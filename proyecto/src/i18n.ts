import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'

export const supportedLanguages = ['es', 'en'] as const
export type Language = (typeof supportedLanguages)[number]

export const resources = {
  es: { translation: es },
  en: { translation: en },
} as const

function applyDocumentLanguage(lng: string) {
  const language = lng.toLowerCase().split('-')[0]
  if (!supportedLanguages.includes(language as Language)) return

  document.documentElement.lang = language

  const title = i18n.getResource(language, 'translation', 'meta.title')
  if (typeof title === 'string' && title.length > 0) document.title = title

  const description = i18n.getResource(language, 'translation', 'meta.description')
  if (typeof description === 'string' && description.length > 0) {
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }
}

i18n.on('languageChanged', applyDocumentLanguage)

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    supportedLngs: [...supportedLanguages],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'portfolio-lang',
      caches: ['localStorage'],
    },
  })
  .then(() => applyDocumentLanguage(i18n.language))

export default i18n
