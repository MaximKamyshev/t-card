import { SvgSpinnerProps } from "./types"

export const SvgSpinner: React.FC<SvgSpinnerProps> = ({ color, procent}) => {
  return (
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50%" cy="50%" fill="none"
      r="372" strokeWidth="25" stroke={color}
      strokeDasharray={`${Math.round(2400 / 100 * procent) - 90} 2400`}
      strokeLinecap="round" />
    </svg>
  )
}