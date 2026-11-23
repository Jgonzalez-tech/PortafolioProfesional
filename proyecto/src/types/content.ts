export type ProjectCategory = 'web' | 'ui' | 'maintenance'

export type Project = {
  id: string
  title: string
  description: string
  category: ProjectCategory
  client: string
  deliverable: string
  technologies: string[]
  image: string
  details: string
}

export type ServiceIcon = 'code' | 'palette' | 'wrench'

export type Service = {
  id: string
  icon: ServiceIcon
  title: string
  description: string
}
