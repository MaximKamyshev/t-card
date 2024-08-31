import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import loadingImage from '../../images/for-loading/loading.png';
import logoImage from '../../images/for-loading/Logo.svg';
import { useEffect, useState } from 'react';

export const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 1500)
  }, [])

  return (
    <div {...stylex.props(styles.container(loadingImage), isLoading && styles.hidden)}>
      <img {...stylex.props(styles.logo)} src={logoImage} alt="" />
    </div>
  )
}