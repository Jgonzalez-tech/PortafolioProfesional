import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const output = resolve('public/cv/CV-Freelance-Javier-Gonzalez.pdf')

const lines = [
  ['Javier Gonzalez - Freelance Frontend Developer', 22, 760],
  ['PLACEHOLDER - reemplaza con tu perfil freelance en PDF', 11, 730],
  ['Servicios: landing pages, interfaces React, mejoras web', 12, 690],
  ['Proyectos: trabajos para clientes y colaboraciones remotas', 12, 665],
  ['Contacto: TU_EMAIL@ejemplo.com | WhatsApp: 0000000000000', 12, 640],
  ['Perfil freelance - no incluye experiencia laboral', 11, 600],
]

const stream = lines
  .map(([text, size, y]) => `BT /F1 ${size} Tf 72 ${y} Td (${text}) Tj ET`)
  .join('\n')

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
]

let pdf = '%PDF-1.4\n'
const offsets = []

objects.forEach((body, index) => {
  offsets.push(Buffer.byteLength(pdf))
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`
})

const xrefOffset = Buffer.byteLength(pdf)
pdf += `xref\n0 ${objects.length + 1}\n`
pdf += '0000000000 65535 f \n'
offsets.forEach((offset) => {
  pdf += `${String(offset).padStart(10, '0')} 00000 n \n`
})
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`

mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, pdf, 'latin1')
console.log(`Placeholder creado: ${output}`)
