import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ArrowUpIcon } from './icons'

export default function ScrollTop() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('aria.scrollTop')}
      className="fixed bottom-24 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-surface/90 text-accent shadow-lg backdrop-blur transition hover:bg-accent hover:text-slate-950 md:bottom-6 md:right-24"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  )
}
