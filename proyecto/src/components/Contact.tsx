import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { site } from '../data/site'
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from './icons'
import Reveal from './Reveal'

type FormValues = {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

type SubmitStatus = 'idle' | 'success' | 'error' | 'notConfigured'

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-700 bg-base px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-accent focus:outline-none'
const labelClass = 'block text-sm font-medium text-slate-200'

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const projectTypes = t('form.projectTypes', { returnObjects: true }) as string[]
  const budgets = t('form.budgets', { returnObjects: true }) as string[]

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('form.errors.name')),
        email: z.string().email(t('form.errors.email')),
        projectType: z.string().min(1, t('form.errors.projectType')),
        budget: z.string().min(1, t('form.errors.budget')),
        message: z.string().min(10, t('form.errors.message')),
      }),
    [t],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', projectType: '', budget: '', message: '' },
  })

  const onSubmit = async (values: FormValues) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('notConfigured')
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          reply_to: values.email,
          project_type: values.projectType,
          budget: values.budget,
          message: values.message,
        },
        { publicKey },
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t('contact.whatsappMessage'))}`

  const downloadCv = () => {
    const link = document.createElement('a')
    link.href = site.cvUrl
    link.download = 'CV-Freelance-Javier-Gonzalez.pdf'
    link.click()
  }

  return (
    <section id="contact" className="bg-base">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{t('contact.title')}</h2>
          <p className="mt-4 max-w-xl text-slate-400">{t('contact.subtitle')}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5">
              <a
                href={`mailto:${site.email}`}
                className="card flex items-start gap-4 transition-colors hover:border-accent/60"
              >
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">
                    {t('contact.emailLabel')}
                  </span>
                  <span className="mt-1 block break-all text-sm text-slate-200">{site.email}</span>
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="card flex items-start gap-4 transition-colors hover:border-accent/60"
              >
                <WhatsappIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-slate-200">{t('contact.whatsapp')}</span>
              </a>

              <button
                type="button"
                onClick={downloadCv}
                className="card flex w-full items-start gap-4 text-left transition-colors hover:border-accent/60"
              >
                <DownloadIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  <span className="block text-sm font-semibold text-slate-100">
                    {t('common.downloadCv')}
                  </span>
                  <span className="mt-1 block text-xs text-slate-400">{t('contact.cvNote')}</span>
                </span>
              </button>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {t('contact.socialTitle')}
                </p>
                <div className="mt-3 flex gap-3">
                  {site.socials.map((social) => {
                    const Icon = social.icon === 'github' ? GithubIcon : LinkedinIcon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t('aria.social')} ${social.label}`}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-accent hover:text-accent"
                      >
                        <Icon className="h-4 w-4" />
                        {social.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-5">
              <h3 className="font-display text-xl font-bold">{t('form.title')}</h3>

              <div>
                <label htmlFor="name" className={labelClass}>
                  {t('form.name')}
                </label>
                <input
                  id="name"
                  placeholder={t('form.namePlaceholder')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClass}
                  {...register('name')}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  {t('form.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t('form.emailPlaceholder')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass}
                  {...register('email')}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    {t('form.projectType')}
                  </label>
                  <select
                    id="projectType"
                    aria-invalid={Boolean(errors.projectType)}
                    className={inputClass}
                    {...register('projectType')}
                  >
                    <option value="">{t('form.projectTypePlaceholder')}</option>
                    {projectTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p role="alert" className="mt-1 text-xs text-red-400">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    {t('form.budget')}
                  </label>
                  <select
                    id="budget"
                    aria-invalid={Boolean(errors.budget)}
                    className={inputClass}
                    {...register('budget')}
                  >
                    <option value="">{t('form.budgetPlaceholder')}</option>
                    {budgets.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p role="alert" className="mt-1 text-xs text-red-400">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t('form.messagePlaceholder')}
                  aria-invalid={Boolean(errors.message)}
                  className={inputClass}
                  {...register('message')}
                />
                {errors.message && (
                  <p role="alert" className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {status !== 'idle' && (
                <p
                  role={status === 'error' || status === 'notConfigured' ? 'alert' : 'status'}
                  className={`text-sm ${status === 'success' ? 'text-accent' : 'text-amber-300'}`}
                >
                  {t(`form.${status}`)}
                </p>
              )}

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
                {isSubmitting ? t('form.sending') : t('form.submit')}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
