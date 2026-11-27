import { useTranslation } from 'react-i18next'

import Reveal from './Reveal'
import WorkspaceIllustration from './illustrations/WorkspaceIllustration'

export default function About() {
  const { t } = useTranslation()
  const skills = t('about.skills', { returnObjects: true }) as string[]

  return (
    <section id="about" className="border-y border-line bg-surface/30">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div
            role="img"
            aria-label={t('about.imageAlt')}
            className="mx-auto w-full max-w-md"
          >
            <WorkspaceIllustration className="w-full" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mt-5 leading-relaxed text-ink">{t('about.body')}</p>
          <p className="mt-4 leading-relaxed text-muted">{t('about.body2')}</p>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
              {t('about.skillsTitle')}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-canvas/60 px-3 py-1.5 text-sm text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="mt-9 border-l-2 border-accent pl-5">
            <p className="text-lg font-medium italic text-ink">“{t('about.quote')}”</p>
            <footer className="mt-2 text-sm text-accent-text">{t('about.quoteAuthor')}</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
