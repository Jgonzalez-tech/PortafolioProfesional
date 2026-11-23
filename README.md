# Portafolio web laboral — Javier González

Portafolio **laboral** (búsqueda de empleo, sin enfoque freelance) desarrollado desde cero con React 19, TypeScript, Vite y Tailwind CSS 4. Incluye cinco secciones de contenido, galería interactiva, formulario con React Hook Form + EmailJS, chat de WhatsApp, descarga de CV, botón scrolltop, animación JSON (Lottie) y cambio de idioma español/inglés con traducciones en archivos JSON.

## Estructura

```
proyecto/                     Aplicación (raíz de Vite)
  src/components/             Secciones y componentes
  src/data/site.ts            Datos de contacto y rutas (placeholders TODO)
  src/locales/es|en/           Traducciones JSON
  src/animations/             Animación Lottie
  public/                     Logos, imágenes, proyectos y CV
promo.png                     Imagen promocional (placeholder)
entrega.txt                   Datos para Moodle
.github/workflows/deploy.yml  Despliegue a GitHub Pages
```

El `vite.config.ts` define `root: 'proyecto'` y `base: '/PortafolioProfesional/'`. El artefacto de Pages se genera en `proyecto/dist`.

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run lint
```

## i18n

- Idiomas: español (por defecto) e inglés.
- El idioma inicial es español; el selector ES/EN del encabezado guarda la elección en `localStorage` (`portfolio-lang`) y la conserva al recargar.
- Traducciones: `proyecto/src/locales/es/translation.json` y `proyecto/src/locales/en/translation.json`.
- `<html lang>`, `<title>` y la meta descripción se actualizan al cambiar de idioma.

## Datos pendientes (placeholders)

Reemplazar en `proyecto/src/data/site.ts`: correo, WhatsApp, LinkedIn, GitHub. En los JSON: empresas, fechas, formación y textos de proyectos. También sustituir:

- `proyecto/public/cv/CV-Javier-Gonzalez.pdf` → CV real.
- `proyecto/public/images/imagen-web-curso.svg` → imagen web creada durante el curso.
- `proyecto/public/projects/*.svg` → capturas reales de los trabajos.
- `promo.png` → imagen promocional definitiva.
- `.env.example` → copiar a `.env` con las claves de EmailJS. Sin claves, el formulario abre el cliente de correo como alternativa funcional.

## Despliegue

El workflow de GitHub Pages se ejecuta al hacer push a `main`. Requiere tener Pages configurado con “GitHub Actions” como fuente. `entrega.txt` contiene la URL y el repositorio para subir a Moodle.

## Paleta (60-30-10)

- 60 % fondo: `#020617` / `#0f172a`
- 30 % superficies: `#1e293b` / `#334155`
- 10 % acento: `#22d3ee`

Se respeta `prefers-reduced-motion` en animaciones y transiciones.
