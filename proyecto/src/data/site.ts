export type SocialIcon = 'github' | 'linkedin'

export type SocialLink = {
  label: string
  url: string
  icon: SocialIcon
}

/**
 * Datos del perfil freelance.
 * TODO: reemplaza los valores marcados con tus datos reales antes de publicar.
 */
export const site = {
  name: 'Javier González',
  email: 'TU_EMAIL@ejemplo.com', // TODO
  whatsapp: '0000000000000', // TODO: código de país + número, sin "+", espacios ni guiones
  cvUrl: `${import.meta.env.BASE_URL}cv/CV-Freelance-Javier-Gonzalez.pdf`,
  socials: [
    { label: 'GitHub', url: 'https://github.com/TU_USUARIO', icon: 'github' }, // TODO
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/TU_PERFIL/',
      icon: 'linkedin',
    }, // TODO
  ] satisfies SocialLink[],
} as const
