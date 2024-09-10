import { Link } from "react-router-dom";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { ModalNotificationProps } from "./types";
import background from '../../images/for-modal-notification/background.webp';

export const ModalNotification: React.FC<ModalNotificationProps> = ({ title, description, linkText, linkPath }) => {

  return (
    <div {...stylex.props(styles.container(background))}>
      <div>
        <p {...stylex.props(styles.title)}>{title}</p>
        <p {...stylex.props(styles.description)}>{description}</p>
        <Link {...stylex.props(styles.link)} to={linkPath}>{linkText}</Link>
      </div>
    </div>
  )
}