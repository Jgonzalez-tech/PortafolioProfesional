import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'es', label: 'ES', nameKey: 'language.spanish' },
  { code: 'en', label: 'EN', nameKey: 'language.english' },
] as const

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const current = i18n.resolvedLanguage ?? i18n.language
  const foundIndex = languages.findIndex((language) =>
    current.toLowerCase().startsWith(language.code),
  )
  const activeIndex = foundIndex === -1 ? 0 : foundIndex
  const nextIndex = activeIndex === 0 ? 1 : 0
  const label = `${languages.map((language) => language.label).join(' ')} · ${t('language.toggle')}: ${t(languages[activeIndex].nameKey)} → ${t(languages[nextIndex].nameKey)}`

  return (
    <button
      type="button"
      onClick={() => void i18n.changeLanguage(languages[nextIndex].code)}
      aria-label={label}
      title={label}
      className="inline-flex h-9 cursor-pointer items-center rounded-full border border-white/20 bg-white/10 p-1 transition-colors duration-300 hover:border-accent"
    >
      <span className="relative flex h-full w-20 rounded-full">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 rounded-full bg-accent shadow-lg shadow-accent/25 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            activeIndex === 0 ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
        {languages.map((language, index) => (
          <Fragment key={language.code}>
            {index > 0 ? ' ' : null}
            <span
              className={`relative z-10 flex w-1/2 items-center justify-center text-xs font-semibold transition-colors duration-300 ${
                index === activeIndex ? 'text-slate-950' : 'text-on-deep/70'
              }`}
            >
              {language.label}
            </span>
          </Fragment>
        ))}
      </span>
    </button>
  )
}
