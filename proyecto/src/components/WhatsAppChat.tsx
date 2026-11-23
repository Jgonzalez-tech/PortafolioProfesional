import { useTranslation } from 'react-i18next'
import { site } from '../data/site'

export default function WhatsAppChat() {
  const { t } = useTranslation()
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t('whatsapp.message'))}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t('whatsapp.label')}
      title={t('whatsapp.label')}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-slate-950 shadow-xl shadow-slate-950/40 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-7"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04.5C6.3.5 1.77 5.03 1.77 10.77c0 1.9.5 3.76 1.44 5.4L1 23l6.99-1.83a10.2 10.2 0 0 0 4.05.83h.01c5.74 0 10.27-4.53 10.27-10.27 0-2.74-1.07-5.32-2.8-7.25Zm-8.48 15.7h-.01c-1.5 0-2.96-.4-4.23-1.17l-.3-.18-4.15 1.09 1.1-4.05-.2-.31a8.3 8.3 0 0 1-1.28-4.45c0-4.6 3.74-8.34 8.34-8.34 2.23 0 4.32.87 5.9 2.44a8.3 8.3 0 0 1 2.44 5.9c0 4.6-3.74 8.34-8.34 8.34Zm4.58-6.25c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.16.25-.66.83-.81 1-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.25a7.6 7.6 0 0 1-1.4-1.75c-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.16 0-.42.06-.64.3-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.16 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.45-.59 1.65-1.16.21-.57.21-1.06.15-1.16-.06-.11-.23-.17-.47-.29Z" />
      </svg>
    </a>
  )
}
