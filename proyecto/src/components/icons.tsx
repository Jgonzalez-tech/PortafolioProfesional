import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  )
}

export function PaletteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.4-3.4 1.8 1.8 0 0 1 1.3-3.1H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z" />
      <circle cx="7.5" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 6.5a4.5 4.5 0 0 0-5.7 5.7L3 18l3 3 5.8-5.8a4.5 4.5 0 0 0 5.7-5.7l-3 3-3-3 3-3Z" />
    </svg>
  )
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 19 3.8 4.8 4.8 0 0 0 18.9 0S17.7-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.3-.4 4.1 0 4.1 0A4.8 4.8 0 0 0 4 3.8a5.2 5.2 0 0 0-1.2 3.6c0 5.1 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 8 16.1V21" />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 8.5V20M4.5 4.5v.01M10 20v-6.2a3.8 3.8 0 0 1 7.6 0V20M10 8.5V20" />
    </svg>
  )
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05.5C5.5.5.2 5.8.2 12.34c0 2.09.55 4.13 1.6 5.92L.5 23.5l5.42-1.42a11.8 11.8 0 0 0 5.64 1.44h.01c6.56 0 11.86-5.3 11.86-11.85 0-3.17-1.24-6.15-3.47-8.39Zm-8.47 18.02h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.21.84.86-3.13-.23-.37a9.83 9.83 0 0 1-1.51-5.25c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.43 9.87-9.88 9.87Zm5.42-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.07 1.05-1.07 2.55s1.09 2.96 1.24 3.16c.15.2 2.14 3.27 5.19 4.58.73.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.32.18-1.45-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19V5m-6 6 6-6 6 6" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12m-4-4 4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3Z" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
