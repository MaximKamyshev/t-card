export interface JobsType {
  id: string
  jobTitle: string
  firstColor: string
  secondColor: string
  isBookmark: boolean
  salary: string
  place: string
  tags: string[]
  createAt: string
  jobLogo?: string
  stacks?: StacksType[]
  description: {
    tasks: contentType[],
    requirements: contentType[]
    experience: contentType[]
    plus: contentType[]
  } | null
  company: CompaniesType
}

interface contentType {
  type: 'list' | 'text'
  content: string
  color?: string
}

interface CompaniesType {
  logo: string
  id: string
  name: string
  isVerified: boolean
  description: {
    tasks: contentType[]
  } | null
  social?: 
    {
      text: string
      value: string
      type: 'link' | 'tel'
    }[]
}

interface StacksType {
  id: string
  name: string
  logo: string
}