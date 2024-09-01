export interface VacancyCardProps { 
  jobTitle: string
  company: {
    name: string
    isConfirm: boolean
  }
  salary: string
  city: string
  tags: string[]
  isBookmark?: boolean
  logo: string
  createTime: string
}