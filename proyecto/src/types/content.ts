export type ProjectCategory = 'backend' | 'fullstack' | 'desktop'

export type Project = {
  id: string
  title: string
  description: string
  category: ProjectCategory
  client: string
  deliverable: string
  technologies: string[]
  images: string[]
  details: string
}

export type ServiceIcon = 'code' | 'palette' | 'wrench' | 'architecture'

export type Service = {
  id: string
  icon: ServiceIcon
  title: string
  description: string
}
