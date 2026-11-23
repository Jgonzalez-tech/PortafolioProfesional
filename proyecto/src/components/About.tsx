import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import ProfileIllustration from './ProfileIllustration'

function useTranslatedArray(key: string): string[] {
  const { t } = useTranslation()
  return t(key, { returnObjects: true }) as unknown as string[]
}

export default function About() {
  const { t } = useTranslation()
  const paragraphs = useTranslatedArray('about.paragraphs')
  const skills = useTranslatedArray('about.skills')

  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="section-label">{t('about.label')}</p>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="mt-3 text-lg font-medium text-slate-200">{t('about.subtitle')}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <h3 className="mt-9 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              {t('about.skillsTitle')}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-3.5 py-1.5 text-sm text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-4 sm:p-6">
            <ProfileIllustration />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
