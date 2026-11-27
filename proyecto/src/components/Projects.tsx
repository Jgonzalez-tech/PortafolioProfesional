import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { useTranslation } from 'react-i18next'

import type { Project, ProjectCategory } from '../types/content'
import { ArrowRightIcon, CloseIcon } from './icons'
import Reveal from './Reveal'

type Filter = 'all' | ProjectCategory

const filters: Filter[] = ['all', 'backend', 'fullstack', 'desktop']

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export default function Projects() {
  const { t } = useTranslation()
  const projects = t('projects.items', { returnObjects: true }) as Project[]
  const [filter, setFilter] = useState<Filter>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  const visibleProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter, projects],
  )

  const selectedProject = projects.find((project) => project.id === selectedId) ?? null

  const plugins = useMemo(
    () =>
      reducedMotion
        ? []
        : [
            Autoplay({
              delay: 3500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ],
    [reducedMotion],
  )

  const carouselOptions = useMemo(
    () => ({ loop: visibleProjects.length > 1, align: 'start' as const }),
    [visibleProjects.length],
  )

  const galleryPlugins = useMemo(
    () =>
      reducedMotion
        ? []
        : [
            Autoplay({
              delay: 2800,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ],
    [reducedMotion],
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, plugins)
  const [galleryRef, galleryApi] = useEmblaCarousel(
    { loop: true, align: 'center' as const },
    galleryPlugins,
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const updateCarouselState = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const updateGalleryState = useCallback((api: EmblaCarouselType) => {
    setGalleryIndex(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    const frame = requestAnimationFrame(() => updateCarouselState(emblaApi))
    emblaApi.on('select', updateCarouselState).on('reInit', updateCarouselState)
    return () => {
      cancelAnimationFrame(frame)
      emblaApi.off('select', updateCarouselState)
      emblaApi.off('reInit', updateCarouselState)
    }
  }, [emblaApi, updateCarouselState])

  useEffect(() => {
    if (!galleryApi) return
    const frame = requestAnimationFrame(() => updateGalleryState(galleryApi))
    galleryApi.on('select', updateGalleryState).on('reInit', updateGalleryState)
    return () => {
      cancelAnimationFrame(frame)
      galleryApi.off('select', updateGalleryState)
      galleryApi.off('reInit', updateGalleryState)
    }
  }, [galleryApi, updateGalleryState])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit()
    emblaApi.scrollTo(0)
  }, [emblaApi, filter])

  useEffect(() => {
    if (!galleryApi || !selectedId) return
    galleryApi.reInit()
    galleryApi.scrollTo(0)
  }, [galleryApi, selectedId])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay as { stop: () => void; play: () => void } | undefined
    if (!autoplay) return
    if (selectedId) autoplay.stop()
    else autoplay.play()
  }, [emblaApi, selectedId])

  useEffect(() => {
    const autoplay = galleryApi?.plugins()?.autoplay as { stop: () => void; play: () => void } | undefined
    if (!autoplay) return
    if (selectedId) autoplay.play()
    else autoplay.stop()
  }, [galleryApi, selectedId])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !emblaApi || selectedId) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        const autoplay = emblaApi.plugins()?.autoplay as { reset: () => void } | undefined
        autoplay?.reset()
      },
      { threshold: 0.25 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [emblaApi, selectedId])

  const openProject = (id: string) => {
    setSelectedId(id)
    dialogRef.current?.showModal()
  }

  const closeProject = () => dialogRef.current?.close()

  const navButtonClass =
    'inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent-text disabled:cursor-not-allowed disabled:opacity-40'

  return (
    <section id="projects" ref={sectionRef} className="border-y border-line bg-surface/30">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t('projects.eyebrow')}</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{t('projects.subtitle')}</p>
        </Reveal>

        <Reveal delay={80}>
          <div role="group" aria-label={t('projects.eyebrow')} className="mt-8 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  filter === item
                    ? 'border-accent bg-accent/15 text-accent-text'
                    : 'border-line text-ink hover:border-accent/60 hover:text-accent-text'
                }`}
              >
                {t(`projects.filters.${item}`)}
              </button>
            ))}
          </div>
        </Reveal>

        {visibleProjects.length === 0 ? (
          <p className="mt-10 text-muted">{t('projects.empty')}</p>
        ) : (
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={t('projects.title')}
            className="mt-10"
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-6">
                {visibleProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="min-w-0 flex-[0_0_88%] pl-6 sm:flex-[0_0_52%] lg:flex-[0_0_33.333%]"
                  >
                    <Reveal delay={Math.min(index * 80, 320)}>
                      <article
                        role="button"
                        tabIndex={0}
                        onClick={() => openProject(project.id)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            openProject(project.id)
                          }
                        }}
                        aria-label={t('projects.openDetails', { title: project.title })}
                        className="card group flex h-full cursor-pointer flex-col overflow-hidden p-0 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/60"
                      >
                        <div className="aspect-[16/10] overflow-hidden bg-canvas">
                          <img
                            src={`${import.meta.env.BASE_URL}${project.images[0]}`}
                            alt={project.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <p className="text-xs uppercase tracking-widest text-accent-text">
                            {project.client}
                          </p>
                          <h3 className="mt-2 font-display text-xl font-bold">{project.title}</h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                            {project.description}
                          </p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                              <li
                                key={technology}
                                className="rounded-full bg-canvas px-2.5 py-1 text-xs text-ink"
                              >
                                {technology}
                              </li>
                            ))}
                          </ul>
                          <span className="mt-6 self-start text-sm font-semibold text-accent-text underline-offset-4 group-hover:underline">
                            {t('projects.viewDetails')} →
                          </span>
                        </div>
                      </article>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  disabled={!canScrollPrev}
                  aria-label={t('projects.prev')}
                  className={navButtonClass}
                >
                  <ArrowRightIcon className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  disabled={!canScrollNext}
                  aria-label={t('projects.next')}
                  className={navButtonClass}
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                {visibleProjects.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(index)}
                    aria-label={t('projects.goTo', { index: index + 1 })}
                    aria-current={index === selectedIndex ? 'true' : undefined}
                    className="group flex h-11 w-8 cursor-pointer items-center justify-center"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        index === selectedIndex ? 'w-6 bg-accent' : 'w-2 bg-line group-hover:bg-accent/60'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={t('aria.projectDialog')}
        onClose={() => setSelectedId(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProject()
        }}
        className="m-auto max-h-[85vh] w-[min(92vw,46rem)] overflow-y-auto rounded-2xl border border-line bg-canvas p-0 text-ink shadow-2xl backdrop:bg-black/70"
      >
        {selectedProject && (
          <div className="relative">
            <button
              type="button"
              onClick={closeProject}
              aria-label={t('common.close')}
              className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
            <div role="region" aria-roledescription="carousel" aria-label={t('projects.gallery')}>
              <div className="relative">
                <div className="overflow-hidden" ref={galleryRef}>
                  <div className="flex">
                    {selectedProject.images.map((image, index) => (
                      <div key={image} className="min-w-0 flex-[0_0_100%]">
                        <img
                          src={`${import.meta.env.BASE_URL}${image}`}
                          alt={`${selectedProject.title} · ${index + 1}`}
                          loading="eager"
                          className="aspect-[16/9] w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => galleryApi?.scrollPrev()}
                  aria-label={t('projects.galleryPrev')}
                  className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                >
                  <ArrowRightIcon className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => galleryApi?.scrollNext()}
                  aria-label={t('projects.galleryNext')}
                  className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                <p className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white" aria-live="polite">
                  {t('projects.imageCounter', {
                    current: galleryIndex + 1,
                    total: selectedProject.images.length,
                  })}
                </p>
              </div>

              <div className="flex justify-center gap-1.5 border-b border-line py-1">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => galleryApi?.scrollTo(index)}
                    aria-label={t('projects.goToImage', { index: index + 1 })}
                    aria-current={index === galleryIndex ? 'true' : undefined}
                    className="group flex h-11 w-8 cursor-pointer items-center justify-center"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        index === galleryIndex ? 'w-6 bg-accent' : 'w-2 bg-line group-hover:bg-accent/60'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-6">
              <p className="text-xs uppercase tracking-widest text-accent-text">
                {selectedProject.client}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">{selectedProject.title}</h3>

              <p className="mt-4 leading-relaxed text-ink">{selectedProject.description}</p>
              <p className="mt-2 leading-relaxed text-muted">{selectedProject.details}</p>

              <dl className="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted">
                    {t('projects.deliverable')}
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{selectedProject.deliverable}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted">
                    {t('projects.technologies')}
                  </dt>
                  <dd className="mt-1 text-sm text-ink">
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
