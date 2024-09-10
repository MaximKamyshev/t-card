import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Link } from 'react-router-dom';
import { SuggestedJobCard } from '../../../shared/ui/suggested-job-card';
import { useJobsStore } from '../../../app/stores/jobs/jobs.store';
import { JobsType } from '../../../app/mocks/types';
import { useTranslation } from 'react-i18next';

export const SuggestedJobs: React.FC = () => {
  const jobs = useJobsStore<JobsType[]>((state: any) => state.jobs);
  const { t } = useTranslation('translation', { keyPrefix: 'homePage' });

  return (
    <section {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.descriptionContainer)}>
        <div>
          <p {...stylex.props(styles.sectionName)}>{t('suggestedJobs')}</p>
          <p {...stylex.props(styles.description)}>{t('based')}</p>
        </div>
        <Link {...stylex.props(styles.link)} to='/Jobs'>{t('viewAll')}</Link>
      </div>
      <div {...stylex.props(styles.list)}>
        {jobs.map((card) => (
          <SuggestedJobCard key={card.id} logo={card.logo} id={card.id} firstColor={card.firstColor} secondColor={card.secondColor} jobTitle={card.jobTitle} company={card.company} isBookmark={card.isBookmark} salary={card.salary} place={card.place} tags={card.tags} />
        ))}
      </div>
    </section>
  )
}