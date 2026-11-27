import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import { site } from '../data/site'
import Reveal from './Reveal'
import { ArrowRightIcon, ArrowUpIcon } from './icons'

const ScrollCue = lazy(() => import('./ScrollCue'))

export default function Hero() {
  const { t } = useTranslation()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section id="home" className="bg-grid relative overflow-hidden">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent-text">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            {t('common.available')}
          </span>

          <p className="eyebrow mt-8 text-accent-text">{t('hero.role')}</p>
          <h1 className="mt-3 max-w-2xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-ink">
            {t('hero.headline')}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t('hero.subheadline')}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              {t('hero.ctaProjects')}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent-text"
            >
              {t('hero.ctaContact')}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-line pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-accent-text">03</p>
              <p className="text-xs uppercase tracking-widest text-muted">
                {t('common.projectCount')}
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent-text">100%</p>
              <p className="text-xs uppercase tracking-widest text-muted">
                {t('common.clientWork')}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto w-full max-w-lg">
            <img
              src={`${import.meta.env.BASE_URL}images/freelance-web.svg`}
              alt={t('hero.imageAlt')}
              className="w-full rounded-2xl drop-shadow-2xl"
            />
            <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-line bg-surface/90 px-4 py-2 text-xs text-ink">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {site.shortName}
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center text-slate-400 transition-colors hover:text-accent md:flex"
      >
        <Suspense fallback={<span className="h-12 w-12" />}>
          <ScrollCue reduceMotion={reduceMotion} />
        </Suspense>
        <span className="sr-only">{t('hero.scroll')}</span>
        <ArrowUpIcon className="h-4 w-4 rotate-180" />
      </a>
    </section>
  )
}
