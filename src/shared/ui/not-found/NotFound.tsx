import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { NotFoundProps } from './types';

export const NotFound: React.FC<NotFoundProps> = ({ title, description, gif }) => {
  return (
    <div {...stylex.props(styles.notFoundContaier)}>
      <p {...stylex.props(styles.notFoundTitle)}>{title}</p>
      <p {...stylex.props(styles.notFoundDescription)}>{description}</p>
      <img {...stylex.props(styles.notFoundImage)} src={gif} />
    </div>
  );
}