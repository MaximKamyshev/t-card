import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SelectItemProps } from './types';
import checkLogo from "../../images/for-select-item/check.svg";

export const SelectItem: React.FC<SelectItemProps> = ({ text, checked, disabled, handlePress }) => {

  return (
    <div onClick={!disabled ? handlePress : () => {}} {...stylex.props(styles.container, disabled && styles.disabledContainer)}>
      <p {...stylex.props(styles.text, disabled && styles.disabledText)}>{text}</p>
      <span {...stylex.props(checked ? styles.circleActive(checkLogo) : styles.circle)} />
    </div>
  )
}
