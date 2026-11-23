import { useTranslation } from 'react-i18next'
import { site } from '../data/site'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-bold text-slate-100">{t('hero.name')}</p>
          <p className="mt-1 text-sm text-slate-400">{t('footer.intro')}</p>
          <p className="mt-1 text-xs text-slate-500">{t('footer.location')}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a className="link-muted" href={site.github} target="_blank" rel="noreferrer">
            {t('common.github')}
          </a>
          <a className="link-muted" href={site.linkedin} target="_blank" rel="noreferrer">
            {t('common.linkedin')}
          </a>
          <a className="link-muted" href={`mailto:${site.email}`}>
            {t('common.email')}
          </a>
          <a className="link-muted" href={site.cvUrl} download>
            {t('common.downloadCv')}
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {year} {t('hero.name')}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
