export interface SuggestedJobCardProps {
  firstColor: string
  secondColor: string
  jobTitle: string
  jobLogo?: string
  company: {
    name: string
    isVerified: boolean
    logo: string
  }
  isBookmark: boolean
  salary: string
  place: string
  tags: string[]
  id: string
}