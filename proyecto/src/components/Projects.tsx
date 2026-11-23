import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { site } from '../data/site'
import ProjectCard, { type Project } from './ProjectCard'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'

const filters = ['all', 'web', 'ui'] as const
type Filter = (typeof filters)[number]

export default function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const projects = t('projects.items', { returnObjects: true }) as unknown as Project[]
  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="proyectos" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">{t('projects.label')}</p>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-9 flex flex-wrap items-center gap-2" role="group" aria-label={t('projects.filtersLabel')}>
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  filter === item
                    ? 'bg-accent text-slate-950'
                    : 'border border-slate-700 text-slate-300 hover:border-accent hover:text-accent'
                }`}
              >
                {t(`projects.filters.${item}`)}
              </button>
            ))}
          </div>
        </Reveal>

        {visible.length === 0 ? (
          <p className="mt-10 text-slate-400">{t('projects.empty')}</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <Reveal key={project.id}>
                <ProjectCard
                  project={project}
                  image={site.projectImages[project.id] ?? ''}
                  onOpen={() => setSelected(project)}
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={selected}
        image={selected ? site.projectImages[selected.id] ?? '' : ''}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
