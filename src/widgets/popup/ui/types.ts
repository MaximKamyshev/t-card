export interface PopupProps {
  text: string
  subscription: string
  buttonText: string
  animationData: any
  modalName: string
  methodName: string
  handleCLick?: () => void
  isCloseButton: boolean
}