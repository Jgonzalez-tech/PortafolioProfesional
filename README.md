# Portafolio Web Freelance — Javier González Pérez

Portafolio **100% freelance** (sin perfil laboral ni mixto) desarrollado desde cero con React 19, TypeScript, Vite 8 y Tailwind CSS 4. Incluye 5 secciones de contenido, galería interactiva, animaciones, i18n ES/EN, modo claro/oscuro y despliegue en GitHub Pages.

> El código fuente de la aplicación está en la carpeta [`proyecto/`](./proyecto).

## Perfil

**Ingeniero de Software Freelance · Backend & Datos**, con proyectos **fullstack** de extremo a extremo. Slogan: *“Código limpio, interfaces con propósito.”*

## Secciones

1. **Inicio / Hero** — propuesta de valor freelance, disponibilidad y CTA a proyectos/contacto.
2. **Sobre mí** — perfil freelance, stack (Java, Spring Boot, Node.js, TypeScript, C#/.NET, SQL, React, Angular, Rust, Tauri, Docker, R2) y forma de trabajo.
3. **Servicios** — carrusel automático con backend y APIs, bases de datos, proyectos fullstack y arquitectura de software para sistemas grandes.
4. **Proyectos** — carrusel automático con 5 proyectos, filtros, flechas/puntos y modal centrado con galería de fotos y detalle (cliente/tipo, entregable y tecnologías).
5. **Contacto** — formulario de presupuesto, WhatsApp, enlaces digitales y descarga del perfil PDF.

El encabezado y el pie de página no cuentan como secciones.

## Modo claro / oscuro

- El **modo claro** es el predeterminado y sigue la identidad visual de la Tarea 2: fondo claro `#F8FAFC` (60%), azul marino `#0F172A` (30%) y cian `#22D3EE` (10%).
- El **modo oscuro** invierte fondo y textos con los mismos acentos cian.
- El selector está en el header junto al switch ES/EN y se guarda en `localStorage` (`portfolio-theme`).

## Cumplimiento de la consigna

| Requisito | Dónde |
|---|---|
| Responsividad y accesibilidad | Layout mobile-first, nav colapsable, skip link, ARIA, `prefers-reduced-motion` |
| Paleta 60-30-10 | `proyecto/src/index.css` (`canvas`, `deep`, `accent`) |
| Favicon e ilustraciones SVG | `proyecto/public/favicon.svg`, `logo.svg`, `src/components/illustrations/` |
| Galería interactiva | `src/components/Projects.tsx` |
| Transiciones | `src/components/Reveal.tsx` + animaciones CSS |
| Animación web JSON | `src/animations/scroll-cue.json` (Lottie) |
| Formulario programado | React Hook Form + Zod + EmailJS en `src/components/Contact.tsx` |
| WhatsApp | `src/components/WhatsAppChat.tsx` |
| Scrolltop | `src/components/ScrollTop.tsx` |
| Descarga de CV freelance | `proyecto/public/cv/CV_ImagenWeb_ES.pdf` / `CV_ImagenWeb_EN.pdf` (según idioma) |
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

- `proyecto/src/data/site.ts`: confirma el número completo de WhatsApp y la URL real de LinkedIn (correo y GitHub ya están tomados de tus documentos).
- `proyecto/public/images/freelance-web.svg`: imagen web freelance creada en el curso.
- `proyecto/public/cv/CV_ImagenWeb_ES.pdf` y `CV_ImagenWeb_EN.pdf`: perfiles freelance reales en español e inglés.
- `proyecto/public/projects/*.svg`: capturas reales de tus proyectos fullstack.
- `proyecto/.env`: credenciales de EmailJS.
- `promo.png`: imagen promocional definitiva.
- `entrega.txt`: URL final del sitio publicado.

El formulario no simula envíos: si EmailJS no está configurado, muestra un mensaje claro y deriva al WhatsApp.
