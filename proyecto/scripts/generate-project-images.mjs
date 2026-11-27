import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const outputDir = resolve('public/projects')

const projects = [
  { id: 1, label: 'API REST / BACKEND' },
  { id: 2, label: 'BASE DE DATOS / SQL' },
  { id: 3, label: 'PANEL FULLSTACK' },
  { id: 4, label: 'SERVICIO RUST' },
  { id: 5, label: 'APP TAURI' },
]

const views = [
  { label: 'VISTA 1/3', accent: 0.22, offset: 0 },
  { label: 'VISTA 2/3', accent: 0.32, offset: 40 },
  { label: 'VISTA 3/3', accent: 0.18, offset: 80 },
]

const svg = ({ id, label }, view, index) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" role="img" aria-label="${label} - ${view.label}">
  <defs>
    <linearGradient id="g${id}${index}" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#1e293b"/>
      <stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="640" height="400" fill="url(#g${id}${index})"/>
  <circle cx="530" cy="70" r="120" fill="#22d3ee" fill-opacity="${view.accent}"/>
  <rect x="60" y="66" width="520" height="268" rx="16" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="60" y="66" width="520" height="38" rx="16" fill="#1e293b"/>
  <circle cx="86" cy="85" r="6" fill="#22d3ee"/>
  <circle cx="108" cy="85" r="6" fill="#334155"/>
  <circle cx="130" cy="85" r="6" fill="#334155"/>
  <rect x="${92 + view.offset}" y="132" width="220" height="14" rx="7" fill="#22d3ee" fill-opacity="0.9"/>
  <rect x="${92 + view.offset}" y="162" width="310" height="9" rx="4.5" fill="#64748b"/>
  <rect x="${92 + view.offset}" y="184" width="260" height="9" rx="4.5" fill="#475569"/>
  <rect x="${92 + view.offset}" y="218" width="132" height="62" rx="10" fill="#22d3ee" fill-opacity="0.2" stroke="#22d3ee"/>
  <rect x="${244 + view.offset / 2}" y="218" width="132" height="62" rx="10" fill="#1e293b" stroke="#334155"/>
  <rect x="${406 - view.offset / 2}" y="218" width="132" height="62" rx="10" fill="#22d3ee" fill-opacity="0.35"/>
  <text x="60" y="368" fill="#e2e8f0" font-family="Arial, sans-serif" font-size="16" font-weight="700">${label}</text>
  <text x="580" y="368" text-anchor="end" fill="#94a3b8" font-family="Arial, sans-serif" font-size="14">${view.label}</text>
</svg>
`

mkdirSync(outputDir, { recursive: true })

for (const project of projects) {
  views.forEach((view, index) => {
    const suffix = index === 0 ? '' : `-${index + 1}`
    const path = resolve(outputDir, `project-${project.id}${suffix}.svg`)
    writeFileSync(path, svg(project, view, index), 'utf8')
    console.log(`Creado: ${path}`)
  })
}
