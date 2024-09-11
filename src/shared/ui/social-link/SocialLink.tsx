import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SocialLinkProps } from './types';
import chevronLogo from '../../images/for-social-link/chevron.svg';

export const SocialLink: React.FC<SocialLinkProps> = ({ text, imageUrl, value, type }) => {
  return (
    <a href={type === 'tel' ? 'tel:' + value : value} target="_blank" {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.flexContainer)}>
        <span {...stylex.props(styles.logo(imageUrl, 21))} />
        <p {...stylex.props(styles.text)}>{text}</p>
      </div>
      <span {...stylex.props(styles.logo(chevronLogo, 16))} />
    </a>
  )
}