import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { applyTheme, getInitialTheme, type Theme } from '../theme'
import { MoonIcon, SunIcon } from './icons'

export default function ThemeToggle() {
  const { t } = useTranslation()
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => applyTheme(theme), [theme])

  const label = `${t('theme.toggle')}: ${t(theme === 'light' ? 'theme.dark' : 'theme.light')}`

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-on-deep transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      <span key={theme} className="theme-icon-in inline-flex">
        {theme === 'light' ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
      </span>
    </button>
  )
}
