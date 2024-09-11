import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SelectItemProps } from './types';
import checkLogo from "../../images/for-select-item/check.svg";

export const SelectItem: React.FC<SelectItemProps> = ({ text, checked, disabled, handlePress }) => {

  return (
    <button onClick={handlePress} disabled={disabled} {...stylex.props(styles.container, disabled && styles.disabledContainer)}>
      <span {...stylex.props(styles.text)}>{text}</span>
      <span {...stylex.props(checked ? styles.circleActive(checkLogo) : styles.circle)} />
    </button>
  )
}
