import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { emailjsConfigured, site } from '../data/site'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'success' | 'error' | 'fallback'

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (values) => {
    setStatus('idle')

    if (!emailjsConfigured) {
      const body = `${values.message}\n\n${values.name}\n${values.email}`
      window.location.assign(
        `mailto:${site.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`,
      )
      setStatus('fallback')
      return
    }

    try {
      await emailjs.send(
        site.emailjs.serviceId,
        site.emailjs.templateId,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        site.emailjs.publicKey,
      )
      reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  })

  const statusMessage =
    status === 'success'
      ? t('form.success')
      : status === 'error'
        ? t('form.error')
        : status === 'fallback'
          ? t('form.mailFallback')
          : ''

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold text-slate-100">{t('contact.formTitle')}</h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">
            {t('form.name')}
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className="field-input"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p id="contact-name-error" className="field-error">
              {t('form.validation.name')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="field-label">
            {t('form.email')}
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className="field-input"
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && (
            <p id="contact-email-error" className="field-error">
              {t('form.validation.email')}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-subject" className="field-label">
          {t('form.subject')}
        </label>
        <input
          id="contact-subject"
          type="text"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          className="field-input"
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p id="contact-subject-error" className="field-error">
            {t('form.validation.subject')}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="field-label">
          {t('form.message')}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className="field-input resize-y"
          {...register('message', { required: true, minLength: 10 })}
        />
        {errors.message && (
          <p id="contact-message-error" className="field-error">
            {t('form.validation.message')}
          </p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 disabled:opacity-60">
        {isSubmitting ? t('form.sending') : t('form.send')}
      </button>

      <p role="status" aria-live="polite" className="mt-4 min-h-5 text-sm text-accent">
        {statusMessage}
      </p>
    </form>
  )
}
