import { Dispatch, SetStateAction } from "react"

export interface BookmarkProps {
  isChecked: boolean
  hadnleBookmark: () => void
  activeColor: string
  inActiveColor: string
}