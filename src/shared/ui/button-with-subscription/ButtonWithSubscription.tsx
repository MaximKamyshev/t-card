import { ButtonWithSubscriptionProps } from "./types"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Link, useLocation } from "react-router-dom";

export const ButtonWithSubscription: React.FC<ButtonWithSubscriptionProps> = ({path, image, subscription}) => {
  const location = useLocation();

  return (
    <Link {...stylex.props(styles.button)} to={path}>
      <div {...stylex.props(location.pathname === path ? styles.buttonImageActive(image) : styles.buttonImage(image))}></div>
      <span {...stylex.props(location.pathname === path ? styles.subscriptionActive : styles.subscription)}>{subscription}</span>
    </Link>
  )
}