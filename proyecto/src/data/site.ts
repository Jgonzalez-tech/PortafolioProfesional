export type SocialIcon = 'github' | 'linkedin'

export type SocialLink = {
  label: string
  url: string
  icon: SocialIcon
}

/**
 * Datos del perfil freelance.
 * TODO: confirma el número de WhatsApp y la URL de LinkedIn antes de publicar.
 */
export const site = {
  name: 'Javier González',
  shortName: 'Javier González',
  email: 'jgonzalezp@ucenfotec.ac.cr',
  whatsapp: '5068469469', // TODO: el documento indica +506 8469-469; confirma el número completo
  cvUrls: {
    es: `${import.meta.env.BASE_URL}cv/CV_ImagenWeb_ES.pdf`,
    en: `${import.meta.env.BASE_URL}cv/CV_ImagenWeb_EN.pdf`,
  },
  socials: [
    { label: 'GitHub', url: 'https://github.com/Jgonzalez-tech', icon: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/TU_PERFIL/',
      icon: 'linkedin',
    }, // TODO: reemplaza con tu URL real de LinkedIn
  ] satisfies SocialLink[],
} as const
