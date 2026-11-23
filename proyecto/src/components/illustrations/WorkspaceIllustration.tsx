import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export default function WorkspaceIllustration(props: Props) {
  return (
    <svg viewBox="0 0 420 360" fill="none" aria-hidden {...props}>
      <defs>
        <linearGradient id="ws-bg" x1="30" y1="20" x2="390" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E293B" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      <rect x="16" y="16" width="388" height="328" rx="28" fill="url(#ws-bg)" stroke="#334155" strokeWidth="2" />
      <circle cx="322" cy="86" r="46" fill="#22D3EE" fillOpacity="0.12" />
      <circle cx="322" cy="86" r="30" stroke="#22D3EE" strokeOpacity="0.35" strokeWidth="2" />

      <rect x="96" y="104" width="206" height="132" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="3" />
      <rect x="110" y="118" width="178" height="104" rx="6" fill="#1E293B" />
      <rect x="124" y="132" width="70" height="8" rx="4" fill="#22D3EE" />
      <rect x="124" y="150" width="136" height="6" rx="3" fill="#475569" />
      <rect x="124" y="164" width="112" height="6" rx="3" fill="#475569" />
      <rect x="124" y="186" width="44" height="24" rx="6" fill="#22D3EE" fillOpacity="0.25" />
      <path d="M182 236h44l10 22h-64l10-22Z" fill="#334155" />
      <rect x="152" y="258" width="104" height="8" rx="4" fill="#475569" />

      <g transform="translate(46 214)">
        <rect x="0" y="18" width="58" height="52" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
        <path d="M8 18V8a8 8 0 0 1 8-8h26a8 8 0 0 1 8 8v10" stroke="#22D3EE" strokeWidth="3" />
        <path d="M18 44c0-7 5-12 11-12s11 5 11 12-5 12-11 12-11-5-11-12Z" fill="#22D3EE" fillOpacity="0.35" />
        <path d="M18 62c2-8 6-12 11-12s9 4 11 12" fill="#22D3EE" fillOpacity="0.35" />
      </g>

      <g transform="translate(320 220)">
        <path d="M12 4h52a10 10 0 0 1 10 10v28a10 10 0 0 1-10 10H34L18 66V52h-6a10 10 0 0 1-10-10V14A10 10 0 0 1 12 4Z" fill="#22D3EE" />
        <rect x="18" y="20" width="40" height="5" rx="2.5" fill="#0F172A" fillOpacity="0.75" />
        <rect x="18" y="30" width="28" height="5" rx="2.5" fill="#0F172A" fillOpacity="0.75" />
      </g>

      <path d="M40 300h340" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      <rect x="96" y="290" width="206" height="10" rx="5" fill="#475569" />
    </svg>
  )
}
