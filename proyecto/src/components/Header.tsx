import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { site } from '../data/site'
import LanguageSwitcher from './LanguageSwitcher'

const sections = [
  { id: 'about', key: 'about' },
  { id: 'experience', key: 'experience' },
  { id: 'proyectos', key: 'projects' },
  { id: 'contacto', key: 'contact' },
] as const

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={closeMenu}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt=""
            className="h-9 w-9 shrink-0"
            aria-hidden="true"
          />
          <span className="font-display text-sm font-bold text-slate-50 sm:text-base">
            {t('hero.name')}
          </span>
        </a>

        <nav
          aria-label={t('nav.menu')}
          className="hidden items-center gap-6 md:flex"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {t(`nav.${section.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={site.cvUrl}
            download
            className="hidden rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:inline-flex"
          >
            {t('common.downloadCv')}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-200 transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.menu')}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={t('nav.menu')}
          className="border-t border-slate-800 bg-slate-950 px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-accent"
                >
                  {t(`nav.${section.key}`)}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.cvUrl}
                download
                onClick={closeMenu}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-accent hover:bg-slate-800"
              >
                {t('common.downloadCv')}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
