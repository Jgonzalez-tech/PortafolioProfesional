import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { site } from '../data/site'
import Reveal from './Reveal'

const JsonAnimation = lazy(() => import('./JsonAnimation'))

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="inicio"
      className="bg-grid relative flex min-h-[calc(100svh-4.25rem)] items-center overflow-hidden px-5 py-16 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {t('hero.status')}
            </span>

            <p className="mt-7 font-display text-lg text-slate-300 sm:text-xl">
              {t('hero.greeting')}
            </p>
            <h1 className="mt-1 font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.05] text-slate-50">
              {t('hero.name')}
            </h1>
            <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">
              {t('hero.role')}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t('hero.description')}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#proyectos" className="btn-primary">
                {t('hero.primaryCta')}
              </a>
              <a href={site.cvUrl} download className="btn-secondary">
                {t('hero.secondaryCta')}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" aria-hidden="true" />
            <img
              src={site.webImage}
              alt={t('hero.imageAlt')}
              className="relative w-full rounded-3xl border border-slate-700/70 bg-slate-900/70 shadow-2xl shadow-slate-950/50"
            />
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-0 text-slate-400">
        <span className="text-[0.7rem] uppercase tracking-[0.25em]">{t('hero.scroll')}</span>
        <Suspense fallback={<span className="h-12 w-12" aria-hidden="true" />}>
          <JsonAnimation className="h-12 w-12" />
        </Suspense>
      </div>
    </section>
  )
}
