import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/translation.json'
import es from './locales/es/translation.json'

const resources = {
  es: { translation: es },
  en: { translation: en },
} as const

const normalizeLanguage = (language: string): 'es' | 'en' =>
  language.toLowerCase().startsWith('en') ? 'en' : 'es'

function applyDocumentLanguage(language: string) {
  const lang = normalizeLanguage(language)
  document.documentElement.lang = lang
  document.title = i18n.t('meta.title', { lng: lang })

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) {
    description.content = i18n.t('meta.description', { lng: lang })
  }
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'portfolio-lang',
    },
  })

applyDocumentLanguage(i18n.resolvedLanguage ?? i18n.language)
i18n.on('languageChanged', applyDocumentLanguage)

export default i18n
