export interface DescriptionCompanySectionProps {
  description: {
    tasks: contentType[],
    requirements: contentType[]
    experience: contentType[]
    plus: contentType[]
  }
}

interface contentType {
  type: 'list' | 'text'
  content: string
  color?: string
}