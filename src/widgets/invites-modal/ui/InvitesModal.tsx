import greenLinkLogo from '../images/link-green.svg';
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import 'react-spring-bottom-sheet/dist/style.css'
import { BottomSheet } from 'react-spring-bottom-sheet';
import { initUtils } from '@telegram-apps/sdk-react';
import { useInvitesModalStore } from '../../../app/stores/invites-modal/invites-modal.store';
import { useInitDataStore } from '../../../app/stores/init-data/init-data.store';

export const InvitesModal: React.FC = () => {
  const utils = initUtils();
  const [isOpen, updateState] = useInvitesModalStore((state: any) => [state.isOpen, state.updateState]);
  const platform = useInitDataStore((state: any) => state.platform);

  const handleInvite = () => {
    utils.shareURL('https://t.me/mybot/myapp', 'Look! Some cool app here!');
  };
  
  return (
    <BottomSheet onDismiss={() => updateState(false)} open={isOpen}>
      <section {...stylex.props(platform === 'ios' && styles.iosWrapper)}>
        <div>
          <p {...stylex.props(styles.bottomSheetTitle)}>Invite Friends</p>
          <p {...stylex.props(styles.bottomSheetSubscription)}>Invite your friends and get reward in TLS</p>
        </div>
        <div {...stylex.props(styles.buttonSheetContainer)}>
          <p>Friends</p>
          <p {...stylex.props(styles.buttonSheetBoldText)}>1000 TLS</p>
          <button onClick={handleInvite} {...stylex.props(styles.logo(greenLinkLogo, 25))} />
        </div>
        <div {...stylex.props(styles.buttonSheetContainer)}>
          <p>Friends of Friends</p>
          <p {...stylex.props(styles.buttonSheetBoldText)}>500 TLS per 1 people</p>
        </div>
      </section>
    </BottomSheet>
  )
}