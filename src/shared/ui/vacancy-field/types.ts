export interface VacancyFieldProps {
  fields: ContentType[]
}

interface ContentType {
  type: 'list' | 'text'
  content: string
  color?: string
}