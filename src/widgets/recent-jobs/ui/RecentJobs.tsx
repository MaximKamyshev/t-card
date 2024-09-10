import { Link } from "react-router-dom"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { ModalNotification } from "../../../shared/ui/modal-notification";
import { RecentJobItem } from "../../../shared/ui/recent-job-item";
import { useJobsStore } from "../../../app/stores/jobs/jobs.store";
import { JobsType } from "../../../app/mocks/types";
import { useTranslation } from "react-i18next";

export const RecentJobs: React.FC = () => {
  const jobs = useJobsStore<JobsType[]>((state: any) => state.jobs);
  const { t } = useTranslation('translation', { keyPrefix: 'homePage' });

  return (
    <section>
      <div {...stylex.props(styles.descriptionContainer)}>
        <p {...stylex.props(styles.sectionName)}>{t('recentJobs')}</p>
        <Link {...stylex.props(styles.link)} to='/Jobs'>{t('viewAll')}</Link>
      </div>
      <div {...stylex.props(styles.paddingContainer)}>
        <ModalNotification title={t('modal.title')} description={t('modal.description')} linkText={t('modal.button')} linkPath="#" />
        <div {...stylex.props(styles.jobsList)}>
          {jobs.slice(0, 4).map((job, index) => (
            <RecentJobItem key={index} logo={job.logo} title={job.jobTitle} tags={job.tags} />
          ))}
        </div>
      </div>
    </section>
  )
}