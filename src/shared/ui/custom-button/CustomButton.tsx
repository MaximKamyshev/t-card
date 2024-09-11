import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { CustomButtonProps } from './types';

export const CustomButton: React.FC<CustomButtonProps> = ({ logoGap, handlePress, scaleSoon, imagePosition, border, value, imageSize, bgColor, textColor, textSize, imageUrl, px, py, isSoon, isDisabled, displayVersion }) => {
  return (
    <button onClick={handlePress} disabled={isDisabled} {...stylex.props(styles.button(logoGap, bgColor, imagePosition, border, imageUrl, textColor, textSize, px, py, displayVersion))}>
      <span>{value}</span>
      <span {...stylex.props(styles.logo(imageUrl, imageSize))}/>
      {isSoon && <span {...stylex.props(styles.soon(scaleSoon))}>Soon...</span>}
    </button>
  )
}