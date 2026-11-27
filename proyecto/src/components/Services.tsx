import { useEffect, useMemo, useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslation } from 'react-i18next'

import type { Service, ServiceIcon } from '../types/content'
import { ArchitectureIcon, CodeIcon, PaletteIcon, WrenchIcon } from './icons'
import Reveal from './Reveal'

const iconMap: Record<ServiceIcon, typeof CodeIcon> = {
  code: CodeIcon,
  palette: PaletteIcon,
  wrench: WrenchIcon,
  architecture: ArchitectureIcon,
}

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

export default function Services() {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true }) as Service[]
  const reducedMotion = useReducedMotion()

  const plugins = useMemo(
    () =>
      reducedMotion
        ? []
        : [
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ],
    [reducedMotion],
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: services.length > 1, align: 'start' as const },
    plugins,
  )

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !emblaApi) return

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
  }, [emblaApi])

  return (
    <section id="services" ref={sectionRef} className="bg-canvas">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t('services.eyebrow')}</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{t('services.subtitle')}</p>
        </Reveal>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={t('services.title')}
          className="mt-12 overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex -ml-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={service.id}
                  className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <article className="card h-full transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/60">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-text">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
