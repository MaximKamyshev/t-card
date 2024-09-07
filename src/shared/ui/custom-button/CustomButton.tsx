import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { CustomButtonProps } from './types';

export const CustomButton: React.FC<CustomButtonProps> = ({ value, imageSize, bgColor, textColor, textSize, imageUrl, px, py, isSoon, isDisabled, displayVersion }) => {
  return (
    <button {...stylex.props(styles.button(bgColor, imageUrl, textColor, textSize, px, py, displayVersion))}>
      <span>{value}</span>
      <span {...stylex.props(styles.logo(imageUrl, imageSize))}/>
    </button>
  )
}