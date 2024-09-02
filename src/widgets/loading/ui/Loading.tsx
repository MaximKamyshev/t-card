import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import loadingImage from '../../images/for-loading/loading.png';
import logoImage from '../../images/for-loading/Logo.svg';
import { LoadingProps } from './types';

export const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div {...stylex.props(styles.container(loadingImage), isLoading && styles.hidden)}>
      <img {...stylex.props(styles.logo)} src={logoImage} alt="" />
    </div>
  )
}