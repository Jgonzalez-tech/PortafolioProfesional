# Portafolio Web Freelance — Javier González

Portafolio **100% freelance** (sin perfil laboral ni mixto) desarrollado desde cero con React 19, TypeScript, Vite 8 y Tailwind CSS 4. Incluye 5 secciones de contenido, galería interactiva, animaciones, i18n ES/EN y despliegue en GitHub Pages.

> El código fuente de la aplicación está en la carpeta [`proyecto/`](./proyecto).

## Secciones

1. **Inicio / Hero** — propuesta de valor freelance, disponibilidad y CTA a proyectos/contacto.
2. **Sobre mí** — perfil freelance, herramientas y forma de trabajo (sin empleadores ni antigüedad).
3. **Servicios** — landing pages, interfaces React y mejoras/mantenimiento.
4. **Proyectos** — galería con filtros, tarjetas y modal de detalle (título, cliente, entregable y tecnologías).
5. **Contacto** — formulario de presupuesto, WhatsApp, enlaces digitales y descarga del perfil PDF.

El encabezado y el pie de página no cuentan como secciones.

## Cumplimiento de la consigna

| Requisito | Dónde |
|---|---|
| Responsividad y accesibilidad | Layout mobile-first, nav colapsable, skip link, ARIA, `prefers-reduced-motion` |
| Paleta 60-30-10 | `proyecto/src/index.css` (`base`, `surface`, `accent`) |
| Favicon e ilustraciones SVG | `proyecto/public/favicon.svg`, `logo.svg`, `src/components/illustrations/` |
| Galería interactiva | `src/components/Projects.tsx` |
| Transiciones | `src/components/Reveal.tsx` + animaciones CSS |
| Animación web JSON | `src/animations/scroll-cue.json` (Lottie) |
| Formulario programado | React Hook Form + Zod + EmailJS en `src/components/Contact.tsx` |
| WhatsApp | `src/components/WhatsAppChat.tsx` |
| Scrolltop | `src/components/ScrollTop.tsx` |
| Descarga de CV freelance | `proyecto/public/cv/CV-Freelance-Javier-Gonzalez.pdf` |
| ES ↔ EN | `src/i18n.ts` + `src/locales/{es,en}/translation.json` + switch en el header |
| 2 espacios digitales | GitHub y LinkedIn en `src/data/site.ts` |
| Enlace remoto | `.github/workflows/deploy.yml` (GitHub Pages) |
| Promo | `promo.png` en la raíz |
| Entrega | `entrega.txt` en la raíz |

## Arranque local

```bash
cd proyecto
npm install
cp .env.example .env   # completa tus claves de EmailJS
npm run dev
```

Build y lint:

```bash
npm run build
npm run lint
```

## Placeholders pendientes

Antes de publicar, reemplaza:

- `proyecto/src/data/site.ts`: correo, WhatsApp, GitHub, LinkedIn.
- `proyecto/public/images/freelance-web.svg`: imagen web freelance creada en el curso.
- `proyecto/public/cv/CV-Freelance-Javier-Gonzalez.pdf`: perfil freelance real.
- `proyecto/public/projects/*.svg`: capturas reales de los proyectos.
- `proyecto/.env`: credenciales de EmailJS.
- `promo.png`: imagen promocional definitiva generada con IA.
- `entrega.txt`: URL final del sitio publicado.

El formulario no simula envíos: si EmailJS no está configurado, muestra un mensaje claro y deriva al WhatsApp.
