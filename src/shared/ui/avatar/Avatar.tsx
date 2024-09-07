import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SvgSpinner } from '../svg-spinner';
import { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = ({ tasksProcent, inviteProcent,  rewardsProcent, size, image }) => {
  return (
      <div {...stylex.props(styles.container(size))}>
        <div {...stylex.props(styles.avatar(image))} />
        <div {...stylex.props(styles.loadingBorder(0))}>
          <SvgSpinner color='black' procent={inviteProcent} />
        </div>
        <div {...stylex.props(styles.loadingBorder(inviteProcent))}>
          <SvgSpinner color='#00A77F' procent={tasksProcent} />
        </div>
        <div {...stylex.props(styles.loadingBorder(tasksProcent + inviteProcent))}>
          <SvgSpinner color='#0088FF' procent={rewardsProcent} />
        </div>
      </div>
  )
}