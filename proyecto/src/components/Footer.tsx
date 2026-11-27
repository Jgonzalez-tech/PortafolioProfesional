import { useTranslation } from 'react-i18next'

import { site } from '../data/site'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display font-bold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{t('footer.tagline')}</p>
        </div>

        <div className="flex items-center gap-3">
          {site.socials.map((social) => {
            const Icon = social.icon === 'github' ? GithubIcon : LinkedinIcon
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t('aria.social')} ${social.label}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent-text"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
