import { useTranslation } from 'react-i18next'
import { GlobeIcon } from './icons'

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
] as const

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const current = i18n.resolvedLanguage ?? i18n.language

  return (
    <div
      role="group"
      aria-label={t('aria.languageSwitch')}
      className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-surface/70 p-1"
    >
      <GlobeIcon className="ml-1.5 h-4 w-4 text-slate-400" />
      {languages.map((language) => {
        const active = current.toLowerCase().startsWith(language.code)
        return (
          <button
            key={language.code}
            type="button"
            onClick={() => void i18n.changeLanguage(language.code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              active
                ? 'bg-accent text-slate-950'
                : 'text-slate-400 hover:text-accent'
            }`}
          >
            {language.label}
          </button>
        )
      })}
    </div>
  )
}
