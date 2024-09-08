import { SearchInput } from "../../../shared/ui/search-input"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { FilterTag } from "../../../shared/ui/filter-tag";
import { VacancyCard } from "../../../shared/ui/vacancy-card";
import { Jobs } from "../../../app/mocks/jobs";
import { FilterSortButton } from "../../../shared/ui/filter-sort-button";
import { useInitDataStore } from "../../../app/stores/init-data/init-data.store";

const filterTags = ['Full-time', 'Remote', 'Part-time', 'Contract', 'Freelance', 'Internship']

export const JobsPage: React.FC = () => {
  const platform = useInitDataStore((state: any) => state.platform);

  return (
    <>
      <header {...stylex.props(styles.header)}>
        <h1 {...stylex.props(styles.title)}>FInd your dream job</h1>
      </header>
      <main>
        <div {...stylex.props(styles.container)}>
          <SearchInput />
        </div>
        <div {...stylex.props(styles.filterTagContainer)}>
          {filterTags.map((tag, index) => (
            <FilterTag key={index} value={tag} />
          ))}
        </div>
        <div {...stylex.props(styles.container)}>
          <p {...stylex.props(styles.jobsFoundText)}>312 Jobs Found</p>
          <div {...stylex.props(styles.jobsList)}>
            {Jobs.map((job, index) => (
              <VacancyCard key={index} id={job.id} jobTitle={job.jobTitle} company={job.company} salary={job.salary} place={job.place} tags={job.tags} createTime={job.createTime} isBookmark={job.isBookmark} logo={job.logo} />
            ))}
          </div>
        </div>
        <div {...stylex.props(styles.filterButtonWrapper(platform == 'ios' ? '113px' : '79px'))}>
          <FilterSortButton />
        </div>
      </main>
    </>
  )
}