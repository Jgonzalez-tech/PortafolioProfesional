import { LottieLight } from 'lottie-react'

import scrollCue from '../animations/scroll-cue.json'

type Props = {
  reduceMotion: boolean
}

export default function ScrollCue({ reduceMotion }: Props) {
  return (
    <LottieLight
      src={scrollCue}
      loop={!reduceMotion}
      autoplay={!reduceMotion}
      className="h-12 w-12"
    />
  )
}
