import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { CircleButtonProps } from './types';

export const CircleButton: React.FC<CircleButtonProps> = ({image}) => {
  return (
    <button {...stylex.props(styles.button)}>
      <div {...stylex.props(styles.icon(image))} />
    </button>
  )
}