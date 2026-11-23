import { useTranslation } from 'react-i18next'
import { supportedLanguages, type Language } from '../i18n'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const current = (i18n.language || 'es').toLowerCase().split('-')[0]

  function changeLanguage(language: Language) {
    void i18n.changeLanguage(language)
  }

  return (
    <div
      className="inline-flex shrink-0 items-center rounded-full border border-slate-700/80 bg-slate-900/70 p-0.5"
      role="group"
      aria-label={t('nav.language')}
    >
      {supportedLanguages.map((language) => {
        const active = current === language
        return (
          <button
            key={language}
            type="button"
            onClick={() => changeLanguage(language)}
            aria-pressed={active}
            className={`min-w-9 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              active
                ? 'bg-accent text-slate-950'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {language.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
