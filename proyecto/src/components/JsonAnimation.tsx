import { useEffect, useState } from 'react'
import { LottieLight } from 'lottie-react'
import animationData from '../animations/scroll-cue.json'

export default function JsonAnimation({ className = '' }: { className?: string }) {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <LottieLight
      src={animationData}
      loop={!reducedMotion}
      autoplay={!reducedMotion}
      className={className}
      aria-hidden="true"
    />
  )
}
