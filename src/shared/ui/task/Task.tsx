import { TaskProps } from "./types"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const Task: React.FC<TaskProps> = ({ image, titile, reward, isCompleted, isClaimed }) => {
  return (
    <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.logo(image))} />
        <div {...stylex.props(styles.bottomLine)}>
          <div>
            <p {...stylex.props(styles.title)}>{titile}</p>
            <p {...stylex.props(styles.reward)}>{reward}</p>
          </div>
          {!isClaimed && <button {...stylex.props(isCompleted ? styles.buttonClaim : styles.button)}>{isCompleted ? 'Claim' : 'Start'}</button>}
        </div>
    </div>
  )
}