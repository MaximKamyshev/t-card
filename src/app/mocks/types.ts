export interface JobsType {
  id: string
  jobTitle: string
  company: {
    name: string
    isConfirm: boolean
  }
  firstColor: string
  secondColor: string
  isBookmark: boolean
  salary: string
  place: string
  tags: string[]
  logo: string
  createTime: string
  jobLogo?: string
  stacks?: {name: string, logo: string}[]
  description: {
    tasks: contentType[],
    requirements: contentType[]
    experience: contentType[]
    plus: contentType[]
  } | null
}

interface contentType {
  type: 'list' | 'text'
  content: string
  color?: string
}