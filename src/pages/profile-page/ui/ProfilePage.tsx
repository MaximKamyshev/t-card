import { Avatar } from "../../../shared/ui/avatar"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useInitDataStore } from "../../../app/stores/init-data.store";
import { CustomButton } from "../../../shared/ui/custom-button";
import checklistLogo from '../images/checklist.svg';
import linkLogo from '../images/link.svg';
import { Link } from "react-router-dom";
import messageNotifLogo from '../images/message-notif.svg';

export const ProfilePage: React.FC = () => {
  const { photoUrl, firstName, lastName } = useInitDataStore((state: any) => state.user);
  return (
    <main {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.points)}><span {...stylex.props(styles.greenText)}>1,893</span> $TLS</p>
      <Avatar image={photoUrl} size={130} inviteProcent={20} tasksProcent={50} rewardsProcent={30} />
      <p {...stylex.props(styles.name)}>{firstName} {lastName}</p>
      <p {...stylex.props(styles.ivites)}>Invited friends: 18</p>
      <div {...stylex.props(styles.buttonsContainer)}>
        <CustomButton value="Tasks" bgColor="#00A77F" px={15} py={12.5} imageUrl={checklistLogo} imageSize={24} />
        <CustomButton value="Invite Friend" px={15} py={12.5} imageUrl={linkLogo} imageSize={20.5} />
        <CustomButton value="Rewards" bgColor="#0088FF" px={15} py={12.5} />
      </div>
      <p {...stylex.props(styles.description)}>By completing tasks and inviting friends you will receive TLS coins, which can be spent in the Rewards section, and in the future you can use them to pay in the app and participate in airdrop.</p>
      <div {...stylex.props(styles.problemsCardContainer)}>
        <span {...stylex.props(styles.notifLogo(messageNotifLogo))}/>
        <p {...stylex.props(styles.notifText)}>Have you found a problem with the app or have ideas for improvement?</p>
        <div {...stylex.props(styles.felxBetweenContainer)}>
          <Link {...stylex.props(styles.notifLink)} to="#">Let us know</Link>
          <p {...stylex.props(styles.notifGreenText)}>We will reward the best suggestions and problem finding</p>
        </div>

      </div>
    </main>
  )
}