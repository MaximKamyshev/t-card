export interface CustomButtonProps {
  value: string
  bgColor?: string
  textColor?: string
  textSize?: number
  imageUrl?: string
  px?: number
  py?: number
  isSoon?: boolean
  isDisabled?: boolean
  displayVersion?: 'flex' | 'inline-flex'
  imageSize?: number,
  handlePress?: () => void
}