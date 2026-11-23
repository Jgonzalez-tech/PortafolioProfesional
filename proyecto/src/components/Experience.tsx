import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

type EducationItem = {
  title: string
  school: string
  period: string
}

export default function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as unknown as ExperienceItem[]
  const education = t('experience.education', { returnObjects: true }) as unknown as EducationItem[]

  return (
    <section id="experience" className="scroll-mt-20 bg-slate-900/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">{t('experience.label')}</p>
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <Reveal>
            <ol className="relative border-l border-slate-700 pl-7">
              {items.map((item, index) => (
                <li key={index} className="relative pb-10 last:pb-0">
                  <span
                    className="absolute -left-[2.15rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-accent"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{item.period}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-100">{item.role}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{item.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="font-display text-lg font-bold text-slate-100">{t('experience.educationTitle')}</h3>
              <div className="mt-5 space-y-5">
                {education.map((item, index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold text-slate-200">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.school}</p>
                    <p className="mt-1 text-xs text-accent">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
