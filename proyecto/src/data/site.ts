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
  email: 'j.gonzalezgop@gmail.com',
  web3FormsAccessKey: '5a093df9-72df-4ec6-b571-6f29f2d69dd0',
  whatsapp: '50684634569', // TODO: el documento indica +506 8469-469; confirma el número completo
  cvUrls: {
    es: `${import.meta.env.BASE_URL}cv/CV_ImagenWeb_ES.pdf`,
    en: `${import.meta.env.BASE_URL}cv/CV_ImagenWeb_EN.pdf`,
  },
  socials: [
    { label: 'GitHub', url: 'https://github.com/Jgonzalez-tech', icon: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/javier-gonz%C3%A1lez-276635326/',
      icon: 'linkedin',
    }, // TODO: reemplaza con tu URL real de LinkedIn
  ] satisfies SocialLink[],
} as const
