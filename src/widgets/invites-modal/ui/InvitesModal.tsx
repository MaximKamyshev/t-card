import greenLinkLogo from "../images/linkGreen.svg";
import close from "../images/close.svg";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import 'react-spring-bottom-sheet/dist/style.css'
import { BottomSheet } from 'react-spring-bottom-sheet';
import { initUtils } from '@telegram-apps/sdk-react';
import { useModalStore } from '../../../app/stores/modal/modal.store';
import { useInitDataStore } from '../../../app/stores/init-data/init-data.store';

export const InvitesModal: React.FC = () => {
  const utils = initUtils();
  const [isInviteModalOpen, updateIsInviteModalOpen] = useModalStore((state: any) => [state.isInviteModalOpen, state.updateIsInviteModalOpen]);
  const platform = useInitDataStore((state: any) => state.platform);

  const handleInvite = () => {
    utils.shareURL('https://t.me/test1X_bot/Tcard', 'Look! Some cool app here!');
  };
  
  return (
    <BottomSheet onDismiss={() => updateIsInviteModalOpen(false)} open={isInviteModalOpen}>
      <section {...stylex.props(platform === 'ios' && styles.iosWrapper)}>
        <div>
          <div {...stylex.props(styles.container)}>
            <p {...stylex.props(styles.bottomSheetTitle)}>Invite Friends</p>
            <button {...stylex.props(styles.button(close))} onClick={() => updateIsInviteModalOpen(false)} />
          </div>
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