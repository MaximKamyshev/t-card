import { ButtonWithSubscription } from "../../../shared/ui/button-with-subscription";
import { NavBarProps } from "./types";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useInitDataStore } from "../../../app/stores/init-data.store";

export const NavBar: React.FC<NavBarProps> = ({items}) => {
  const platform = useInitDataStore((state: any) => state.platform);

  return (
    <nav {...stylex.props(styles.container, platform === "ios" && styles.iosPadding)}>
      {items.map((item, index) => (
        <ButtonWithSubscription path={item.path} key={index} image={item.image} subscription={item.subscription} />
      ))}
    </nav>
  )
}