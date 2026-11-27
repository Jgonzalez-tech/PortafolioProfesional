import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { site } from '../data/site'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { ArrowRightIcon, CloseIcon, MenuIcon } from './icons'

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
] as const

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deep/90 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt={t('aria.logo')}
            className="h-10 w-10"
          />
          <span className="font-display text-lg font-bold tracking-tight text-on-deep">
            {site.name}
          </span>
        </a>

        <nav aria-label={t('nav.home')} className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-on-deep/85 transition-colors hover:text-accent"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <a href="#contact" className="btn-primary hidden text-sm md:inline-flex">
            {t('nav.cta')}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/20 text-on-deep lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label={t('nav.home')}
        hidden={!menuOpen}
        className="border-t border-white/10 bg-deep px-6 py-4 lg:hidden"
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-on-deep/85 hover:bg-white/10 hover:text-accent"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
          <li className="pt-2 md:hidden">
            <a href="#contact" onClick={closeMenu} className="btn-primary w-full text-sm">
              {t('nav.cta')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
