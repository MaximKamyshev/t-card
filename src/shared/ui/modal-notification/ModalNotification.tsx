import { Link } from "react-router-dom";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { ModalNotificationProps } from "./types";
import background from '../../images/for-modal-notification/background.webp';
import confirmLogo from '../../images/for-modal-notification/confirm.svg';
import { Rating } from "../rating";

export const ModalNotification: React.FC<ModalNotificationProps> = ({ title, isRating, description, linkText, linkPath, isConfirm }) => {

  return (
    <div {...stylex.props(styles.container(background))}>
      <div {...stylex.props(styles.flexContainer)}>
        <div {...stylex.props(styles.confirmContainer)}>
          <p {...stylex.props(styles.title)}>{title}</p>
          {isConfirm && <span {...stylex.props(styles.logo(confirmLogo, 20))} />}
        </div>
        <p {...stylex.props(styles.description)}>{description}</p>
        {isRating && <Rating />}
        <Link {...stylex.props(styles.link)} to={linkPath}>{linkText}</Link>
      </div>
    </div>
  )
}