import { Avatar } from "../../../shared/ui/avatar"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useInitDataStore } from "../../../app/stores/init-data/init-data.store";
import { CustomButton } from "../../../shared/ui/custom-button";
import checklistLogo from '../images/checklist.svg';
import linkLogo from '../images/link.svg';
import { Link } from "react-router-dom";
import messageNotifLogo from '../images/messageNotif.svg';
import createResumeImage from '../images/createResume.png';
import { TestVersionText } from "../../../shared/ui/test-version-text/TestVersionText";
import { useInvitesModalStore } from "../../../app/stores/invites-modal/invites-modal.store";
import { InvitesModal } from "../../../widgets/invites-modal";

export const ProfilePage: React.FC = () => {
  const { photoUrl, firstName, lastName } = useInitDataStore((state: any) => state.user);
  const updateState = useInvitesModalStore((state: any) => state.updateState);

  const handleOpenBottomSheet = () => {
    updateState(true);
  };

  return (
    <main {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.points)}><span {...stylex.props(styles.greenText)}>1,893</span> $TLS</p>
      <Avatar image={photoUrl} size={130} inviteProcent={20} tasksProcent={50} rewardsProcent={30} />
      <p {...stylex.props(styles.name)}>{firstName} {lastName}</p>
      <p {...stylex.props(styles.ivites)}>Invited friends: 18</p>
      <div {...stylex.props(styles.buttonsContainer)}>
        <CustomButton value="Tasks" bgColor="#00A77F" px={15} py={12.5} imageUrl={checklistLogo} imageSize={24} />
        <CustomButton handlePress={handleOpenBottomSheet} value="Invite Friend" px={15} py={12.5} imageUrl={linkLogo} imageSize={20.5} />
        <CustomButton value="Rewards" isDisabled={true} bgColor="#0088FF" px={15} py={12.5} />
      </div>
      <p {...stylex.props(styles.description)}>By completing tasks and inviting friends you will receive TLS coins, which can be spent in the Rewards section, and in the future you can use them to pay in the app and participate in airdrop.</p>
      <div {...stylex.props(styles.problemsCardContainer)}>
        <span {...stylex.props(styles.logo(checklistLogo, 24))} />
        <p {...stylex.props(styles.notifText)}>Have you found a problem with the app or have ideas for improvement?</p>
        <div {...stylex.props(styles.felxBetweenContainer)}>
          <Link {...stylex.props(styles.notifLink)} to="#">Let us know</Link>
          <p {...stylex.props(styles.notifGreenText)}>We will reward the best suggestions and problem finding</p>
        </div>
      </div>
      <div {...stylex.props(styles.createResumeContainer(createResumeImage))}>
        <p {...stylex.props(styles.createResumeText)}>Create your first Resume</p>
        <CustomButton value="Soon" textSize={11} bgColor="#00A77F" px={34} py={9} />
      </div>
      <TestVersionText />
      <InvitesModal />
    </main>
  )
}