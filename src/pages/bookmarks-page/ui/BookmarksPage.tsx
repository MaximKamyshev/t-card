import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Switcher } from '../../../shared/ui/switcher';
import { VacancyCard } from '../../../shared/ui/vacancy-card';
import { NotFound } from '../../../shared/ui/not-found';
import bananLottie from '../../../app/assets/lotties/banan-not-found.json';
import { useJobsStore } from '../../../app/stores/jobs/jobs.store';
import { JobsType } from '../../../app/mocks/types';
import { useBookmarksSectionsStore } from '../../../app/stores/booksmarks-sections/booksmarks-sections.store';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { morph } from '../../../app/utils/morph';

export const BookmarksPage: React.FC = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'bookmarksPage' });
  const booksmarksSections = [t('vacancies'), t('subs')]
  const jobs = useJobsStore<JobsType[]>((state: any) => state.jobs);
  const bookmarks = jobs.filter(job => job.isBookmark)
  const [currentSection, updateCurrentSection] = useBookmarksSectionsStore((state: any) => [state.currentSection, state.updateCurrentSection]);
  const morphWord = useMemo(() => {
    return morph(currentSection === t('vacancies').toLowerCase() ? bookmarks.length : 0, currentSection === t('vacancies').toLowerCase() ? ['Вакансия', 'Вакансии', 'Вакансий'] : currentSection === t('subs').toLowerCase() ? ['Подписка', 'Подписки', 'Подписок'] : [])
  }, [bookmarks])
  useEffect(() => {
    updateCurrentSection(t('vacancies').toLowerCase())
  }, [])

  return (
    <>
      <header {...stylex.props(styles.header)}>
        <h1 {...stylex.props(styles.title)}>{t('title')}</h1>
      </header>
      <main {...stylex.props(styles.container)}>
        <Switcher items={booksmarksSections} />
        {i18n.language === 'ru' ? 
          <p {...stylex.props(styles.jobsFoundText)}>{currentSection === t('vacancies').toLowerCase() ? bookmarks.length : 0} {morphWord}</p>
        :
          <p {...stylex.props(styles.jobsFoundText)}>{currentSection === t('vacancies').toLowerCase() ? bookmarks.length : 0} {currentSection ===  'subscriptions' ? bookmarks.length === 1 ? 'Subscription' : 'Subscriptions' : bookmarks.length === 1 ? 'Vacancy' : 'Vacancies'}</p>
        }
        {currentSection === t('vacancies').toLowerCase() && bookmarks.length > 0 ?
          <div {...stylex.props(styles.jobsList)}>
            {bookmarks.map((job, index) => (
              <VacancyCard jobLogo={job.jobLogo} key={index} id={job.id} jobTitle={job.jobTitle} company={job.company} salary={job.salary} place={job.place} tags={job.tags} createAt={job.createAt} isBookmark={job.isBookmark} />
            ))}
          </div>
        :
          <div {...stylex.props(styles.notFoundContainer)}>
            <NotFound title={t('notFound.text')} description={t('notFound.subscription')} animationData={bananLottie} />
          </div>
        }
      </main>
    </>
  )
}