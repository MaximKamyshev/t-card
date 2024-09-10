import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Switcher } from '../../../shared/ui/switcher';
import { VacancyCard } from '../../../shared/ui/vacancy-card';
import { NotFound } from '../../../shared/ui/not-found';
import flamyLottie from '../../../app/assets/lotties/Flamy.json';
import { useJobsStore } from '../../../app/stores/jobs/jobs.store';
import { JobsType } from '../../../app/mocks/types';
import { useBookmarksSectionsStore } from '../../../app/stores/booksmarks-sections/booksmarks-sections.store';
import { useTranslation } from 'react-i18next';

export const BookmarksPage: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'bookmarksPage' });
  const booksmarksSections = [t('vacancies'), t('subs')]
  const jobs = useJobsStore<JobsType[]>((state: any) => state.jobs);
  const bookmarks = jobs.filter(job => job.isBookmark)
  const currentSection = useBookmarksSectionsStore((state: any) => state.currentSection);
  return (
    <>
      <header {...stylex.props(styles.header)}>
        <h1 {...stylex.props(styles.title)}>{t('title')}</h1>
      </header>
      <main {...stylex.props(styles.container)}>
        <Switcher items={booksmarksSections} />
        <p {...stylex.props(styles.jobsFoundText)}>{bookmarks.length} {currentSection ===  'subscriptions' ? bookmarks.length === 1 ? 'Subscription' : 'Subscriptions' : bookmarks.length === 1 ? 'Vacancy' : 'Vacancies'}</p>
        {currentSection === t('vacancies').toLowerCase() && bookmarks.length > 0 ?
          <div {...stylex.props(styles.jobsList)}>
            {bookmarks.map((job, index) => (
              <VacancyCard jobLogo={job.jobLogo} key={index} id={job.id} jobTitle={job.jobTitle} company={job.company} salary={job.salary} place={job.place} tags={job.tags} createTime={job.createTime} isBookmark={job.isBookmark} logo={job.logo} />
            ))}
          </div>
        :
          <div {...stylex.props(styles.notFoundContainer)}>
            <NotFound title={t('notFound.text')} description={t('notFound.subscription')} animationData={flamyLottie} />
          </div>
        }
      </main>
    </>
  )
}