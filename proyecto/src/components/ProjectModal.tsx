import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { Project } from './ProjectCard'

type ProjectModalProps = {
  project: Project | null
  image: string
  onClose: () => void
}

export default function ProjectModal({ project, image, onClose }: ProjectModalProps) {
  const { t } = useTranslation()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
      aria-labelledby="project-modal-title"
      className="w-[min(92vw,42rem)] rounded-2xl border border-slate-700 bg-slate-900 p-0 text-slate-100 shadow-2xl backdrop:bg-slate-950/80"
    >
      {project && (
        <div>
          <img src={image} alt="" className="aspect-[16/8] w-full object-cover" />
          <div className="p-6 sm:p-8">
            <p className="section-label mb-2">{t('projects.detailsTitle')}</p>
            <h2 id="project-modal-title" className="font-display text-2xl font-bold">
              {project.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
              {t('projects.techTitle')}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <li key={technology} className="tag">
                  {technology}
                </li>
              ))}
            </ul>
            <button type="button" onClick={onClose} className="btn-secondary mt-8">
              {t('projects.close')}
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
