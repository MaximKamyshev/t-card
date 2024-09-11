export interface SelectMenuProps {
  items: {
    value: string
    id: string
    isDisabled: boolean
    scaleSoon?: string
    handleChange: (value: string) => void
  }[]
  selectedItem: string
  bgColor: string
  bgColorActive: string
  textColor: string
  textColorActive: string
  border: string
  borderActive: string
}

