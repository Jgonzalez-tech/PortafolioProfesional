import { useTranslation } from 'react-i18next'

import type { Service, ServiceIcon } from '../types/content'
import { CodeIcon, PaletteIcon, WrenchIcon } from './icons'
import Reveal from './Reveal'

const iconMap: Record<ServiceIcon, typeof CodeIcon> = {
  code: CodeIcon,
  palette: PaletteIcon,
  wrench: WrenchIcon,
}

export default function Services() {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true }) as Service[]

  return (
    <section id="services" className="bg-base">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t('services.eyebrow')}</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">{t('services.subtitle')}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal key={service.id} delay={index * 90}>
                <article className="card h-full transition duration-300 hover:-translate-y-1 hover:border-accent/60">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
