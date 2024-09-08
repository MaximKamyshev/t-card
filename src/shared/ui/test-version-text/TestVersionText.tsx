import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const TestVersionText = () => {
  return (
    <p {...stylex.props(styles.version)}>T - Card Version: <span{...stylex.props(styles.testText)}>Test</span> <span {...stylex.props(styles.versionNumber)}>0.0.01</span></p>
  )
}