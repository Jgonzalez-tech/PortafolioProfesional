import { useTranslation } from 'react-i18next'

export type Project = {
  id: string
  title: string
  description: string
  category: string
  tech: string[]
}

type ProjectCardProps = {
  project: Project
  image: string
  onOpen: () => void
}

export default function ProjectCard({ project, image, onOpen }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-slate-950/40">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-slate-100">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <li key={technology} className="tag">
              {technology}
            </li>
          ))}
        </ul>
        <button type="button" onClick={onOpen} className="btn-text mt-6 self-start">
          {t('projects.open')} <span aria-hidden="true">→</span>
          <span className="sr-only"> {project.title}</span>
        </button>
      </div>
    </article>
  )
}
