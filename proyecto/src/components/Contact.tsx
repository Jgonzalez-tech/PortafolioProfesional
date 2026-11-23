import { useTranslation } from 'react-i18next'
import { site } from '../data/site'
import ContactForm from './ContactForm'
import Reveal from './Reveal'

export default function Contact() {
  const { t } = useTranslation()
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t('whatsapp.message'))}`

  return (
    <section id="contacto" className="scroll-mt-20 bg-slate-900/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">{t('contact.label')}</p>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-slate-100">{t('contact.directTitle')}</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <span className="block text-xs uppercase tracking-widest text-slate-500">{t('common.email')}</span>
                  <a className="link-muted mt-1 inline-block" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-slate-500">WhatsApp</span>
                  <a className="link-muted mt-1 inline-block" href={whatsappHref} target="_blank" rel="noreferrer">
                    {t('whatsapp.label')}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-slate-500">{t('common.linkedin')}</span>
                  <a className="link-muted mt-1 inline-block" href={site.linkedin} target="_blank" rel="noreferrer">
                    {site.linkedin}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-slate-500">{t('common.github')}</span>
                  <a className="link-muted mt-1 inline-block" href={site.github} target="_blank" rel="noreferrer">
                    {site.github}
                  </a>
                </li>
              </ul>
              <a href={site.cvUrl} download className="btn-secondary mt-8">
                {t('common.downloadCv')}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
