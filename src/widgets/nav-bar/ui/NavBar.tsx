import { ButtonWithSubscription } from "../../../shared/ui/button-with-subscription";
import { NavBarProps } from "./types";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const NavBar: React.FC<NavBarProps> = ({items}) => {
  
  return (
    <nav {...stylex.props(styles.container)}>
      {items.map((item, index) => (
        <ButtonWithSubscription path={item.path} key={index} image={item.image} subscription={item.subscription} />
      ))}
    </nav>
  )
}