import { useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import type { Project, ProjectCategory } from '../types/content'
import { CloseIcon } from './icons'
import Reveal from './Reveal'

type Filter = 'all' | ProjectCategory

const filters: Filter[] = ['all', 'web', 'ui', 'maintenance']

export default function Projects() {
  const { t } = useTranslation()
  const projects = t('projects.items', { returnObjects: true }) as Project[]
  const [filter, setFilter] = useState<Filter>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const visibleProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter, projects],
  )

  const selectedProject = projects.find((project) => project.id === selectedId) ?? null

  const openProject = (id: string) => {
    setSelectedId(id)
    dialogRef.current?.showModal()
  }

  const closeProject = () => dialogRef.current?.close()

  return (
    <section id="projects" className="border-y border-slate-800 bg-surface/30">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t('projects.eyebrow')}</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">{t('projects.subtitle')}</p>
        </Reveal>

        <Reveal delay={80}>
          <div role="group" aria-label={t('projects.eyebrow')} className="mt-8 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  filter === item
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-slate-700 text-slate-300 hover:border-accent/60 hover:text-accent'
                }`}
              >
                {t(`projects.filters.${item}`)}
              </button>
            ))}
          </div>
        </Reveal>

        {visibleProjects.length === 0 ? (
          <p className="mt-10 text-slate-400">{t('projects.empty')}</p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <article className="card group flex h-full flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-accent/60">
                  <div className="aspect-[16/10] overflow-hidden bg-base">
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase tracking-widest text-accent">{project.client}</p>
                    <h3 className="mt-2 font-display text-xl font-bold">{project.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full bg-base px-2.5 py-1 text-xs text-slate-300"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => openProject(project.id)}
                      className="mt-6 self-start text-sm font-semibold text-accent underline-offset-4 hover:underline"
                    >
                      {t('projects.viewDetails')} →
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={t('aria.projectDialog')}
        onClose={() => setSelectedId(null)}
        className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-base p-0 text-slate-50 shadow-2xl backdrop:bg-slate-950/80"
      >
        {selectedProject && (
          <div>
            <img
              src={`${import.meta.env.BASE_URL}${selectedProject.image}`}
              alt={selectedProject.title}
              className="aspect-[16/8] w-full object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">
                    {selectedProject.client}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={closeProject}
                  aria-label={t('common.close')}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-accent hover:text-accent"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-5 leading-relaxed text-slate-300">{selectedProject.description}</p>
              <p className="mt-3 leading-relaxed text-slate-400">{selectedProject.details}</p>

              <dl className="mt-7 grid gap-4 border-t border-slate-800 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-400">
                    {t('projects.deliverable')}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-200">{selectedProject.deliverable}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-400">
                    {t('projects.technologies')}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-200">
                    {selectedProject.technologies.join(' · ')}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
