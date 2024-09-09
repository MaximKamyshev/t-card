import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Switcher } from '../../../shared/ui/switcher';
import { VacancyCard } from '../../../shared/ui/vacancy-card';
import { Jobs } from '../../../app/mocks/jobs';
import { NotFound } from '../../../shared/ui/not-found';
import gifFire from "../../../app/assets/gifs/fire.gif";

export const BookmarksPage: React.FC = () => {
  const bookmarks = Jobs.filter(job => job.isBookmark)
  const booksmarksSections = ['Vacancies', 'Subscriptions']
  return (
    <>
      <header {...stylex.props(styles.header)}>
        <h1 {...stylex.props(styles.title)}>Bookmarks</h1>
      </header>
      <main {...stylex.props(styles.container)}>
        <Switcher items={booksmarksSections} />
        <p {...stylex.props(styles.jobsFoundText)}>{bookmarks.length} Vacancies</p>
        {bookmarks.length > 0 ?
          <div {...stylex.props(styles.jobsList)}>
            {bookmarks.map((job, index) => (
              <VacancyCard key={index} id={job.id} jobTitle={job.jobTitle} company={job.company} salary={job.salary} place={job.place} tags={job.tags} createTime={job.createTime} isBookmark={job.isBookmark} logo={job.logo} />
            ))}
          </div>
        :
          <div {...stylex.props(styles.notFoundContainer)}>
            <NotFound title="You Don't have any Bookmarks" description='Add them right now!' gif={gifFire} />
          </div>
        }
      </main>
    </>
  )
}