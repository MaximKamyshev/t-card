export interface SuggestedJobCardProps {
  firstColor: string
  secondColor: string
  jobTitle: string
  company: {
    name: string
    isConfirm: boolean
  }
  isBookmark: boolean
  salary: string
  place: string
  tags: string[]
  logo: string
  id: string
}