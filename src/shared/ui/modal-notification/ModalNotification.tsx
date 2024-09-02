import { Link } from "react-router-dom";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { ModalNotificationProps } from "./types";
import closeImage from '../../images/for-modal-notification/close.svg';
import { useState } from "react";
import background from '../../images/for-modal-notification/background.png';

export const ModalNotification: React.FC<ModalNotificationProps> = ({ title, description, linkText, linkPath }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div {...stylex.props(isHidden ? styles.hidden : styles.container(background))}>
      <div>
        <p {...stylex.props(styles.title)}>{title}</p>
        <p {...stylex.props(styles.description)}>{description}</p>
        <Link {...stylex.props(styles.link)} to={linkPath}>{linkText}</Link>
      </div>
      <div onClick={() => setIsHidden(true)} {...stylex.props(styles.closeButton(closeImage))} />
    </div>
  )
}