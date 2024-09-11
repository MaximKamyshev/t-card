export interface VacancyCardProps {
  id: string 
  jobTitle: string
  company: {
    name: string
    isVerified: boolean
    logo: string
  }
  salary: string
  place: string
  tags: string[]
  isBookmark?: boolean
  createAt: string
  jobLogo?: string
}