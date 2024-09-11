import { ProfileInfo } from '../../../shared/ui/profile-info';
import { CircleButton } from '../../../shared/ui/circle-button';
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SearchInput } from '../../../shared/ui/search-input';
import { SuggestedJobs } from '../../../widgets/suggested-jobs';
import { RecentJobs } from '../../../widgets/recent-jobs';
import bellIcon from '../images/bell.svg';
import { useInitDataStore } from '../../../app/stores/init-data/init-data.store';
import { Popup } from '../../../widgets/popup';
import congratulationsBananaLottie from '../../../app/assets/lotties/congratulations-banana.json';

export const HomePage: React.FC = () => {
  const user = useInitDataStore((state: any) => state.user);
  
  return (
    <div>
      <header {...stylex.props(styles.header)}>
        <ProfileInfo avatar={user?.photoUrl} username={`${user?.firstName} ${user?.lastName}`} />
        <CircleButton image={bellIcon} />
      </header>
      <main>
        <div {...stylex.props(styles.container)}>
          <SearchInput />
        </div>
        <SuggestedJobs />
        <RecentJobs />
      </main>
      <Popup isCloseButton={false} modalName='isPresentModalOpen' methodName='updateIsPresentModalOpen' animationData={congratulationsBananaLottie} text='Welcome to T - Card!' subscription='Get a welcome bonus of 2000 TLS!' buttonText='Claim'/>
    </div>
  )
}