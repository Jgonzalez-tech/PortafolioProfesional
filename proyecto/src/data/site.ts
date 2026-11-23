const base = import.meta.env.BASE_URL

/**
 * Datos de contacto y rutas de archivos.
 * TODO: reemplazar los valores marcados por los datos reales.
 */
export const site = {
  email: 'javier.gonzalez@ejemplo.com',
  whatsapp: '5491122334455',
  linkedin: 'https://www.linkedin.com/in/todo',
  github: 'https://github.com/todo',
  cvUrl: `${base}cv/CV-Javier-Gonzalez.pdf`,
  webImage: `${base}images/imagen-web-curso.svg`,
  projectImages: {
    'panel-analitico': `${base}projects/panel-analitico.svg`,
    'sistema-diseno': `${base}projects/sistema-diseno.svg`,
    'landing-corporativa': `${base}projects/landing-corporativa.svg`,
  } as Record<string, string>,
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  },
} as const

export const emailjsConfigured = Boolean(
  site.emailjs.serviceId && site.emailjs.templateId && site.emailjs.publicKey,
)
