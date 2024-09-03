import { useEffect, useMemo } from 'react';
import { useInitData } from '@telegram-apps/sdk-react';
import { ProfileInfo } from '../../../shared/ui/profile-info';
import { CircleButton } from '../../../shared/ui/circle-button';
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SearchInput } from '../../../shared/ui/search-input';
import { SuggestedJobs } from '../../../widgets/suggested-jobs';
import { RecentJobs } from '../../../widgets/recent-jobs';
import bellIcon from '../images/bell.svg';

export const HomePage: React.FC = () => {
  const initData = useInitData();
  const userRows = useMemo(() => {
    return initData && initData.user ? initData.user : undefined;
  }, [initData]);

  useEffect(() => {
    
  })
  return (
    <div {...stylex.props(styles.mainWrapper)}>
      <header {...stylex.props(styles.header)}>
        <ProfileInfo avatar={userRows?.photoUrl} username={`${userRows?.firstName} ${userRows?.lastName}`} />
        <CircleButton image={bellIcon} />
      </header>
      <main>
        <div {...stylex.props(styles.container)}>
          <SearchInput />
        </div>
        <SuggestedJobs />
        <RecentJobs />
      </main>
    </div>
  )
}