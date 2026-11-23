import { useTranslation } from 'react-i18next'

import { site } from '../data/site'
import { WhatsappIcon } from './icons'

export default function WhatsAppChat() {
  const { t } = useTranslation()
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t('contact.whatsappMessage'))}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t('aria.whatsapp')}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  )
}
