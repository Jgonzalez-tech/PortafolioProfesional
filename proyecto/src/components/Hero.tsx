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
    <section
      id="home"
      className="bg-grid relative flex min-h-[calc(100svh-4.8rem)] items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-5 px-6 pb-[5.5rem] pt-5 md:grid-cols-2 md:gap-6 lg:gap-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent-text">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            {t('common.available')}
          </span>

          <p className="eyebrow mt-4 text-accent-text lg:mt-6">{t('hero.role')}</p>
          <h1 className="mt-2 max-w-2xl font-display text-[clamp(1.6rem,3vw,2.25rem)] font-bold leading-[1.08] tracking-tight text-ink [@media(min-height:800px)]:text-[clamp(2.5rem,6vw,4.5rem)] lg:mt-3">
            {t('hero.headline')}
          </h1>
          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted lg:mt-6 [@media(min-height:800px)]:text-lg">
            {t('hero.subheadline')}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 lg:mt-8">
            <a href="#projects" className="btn-primary px-4 py-2 text-xs lg:px-5 lg:py-2.5 lg:text-sm">
              {t('hero.ctaProjects')}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent-text lg:px-5 lg:py-2.5 lg:text-sm"
            >
              {t('hero.ctaContact')}
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-3 lg:mt-8 lg:gap-8 lg:pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-accent-text">04</p>
              <p className="text-[10px] uppercase tracking-widest text-muted lg:text-xs">
                {t('common.projectCount')}
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent-text">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-muted lg:text-xs">
                {t('common.clientWork')}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto w-full max-w-md lg:max-w-lg">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-fullstack.svg`}
              alt={t('hero.imageAlt')}
              className="w-full rounded-2xl drop-shadow-2xl"
            />
            <div className="mx-auto mt-4 flex w-fit items-center justify-center gap-2 rounded-full border border-line bg-surface/90 px-4 py-2 text-sm text-ink">
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
