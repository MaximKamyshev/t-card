import { SearchInput } from "../../../shared/ui/search-input"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { FilterTag } from "../../../shared/ui/filter-tag";
import { VacancyCard } from "../../../shared/ui/vacancy-card";
import { FilterSortButton } from "../../../shared/ui/filter-sort-button";
import { useInitDataStore } from "../../../app/stores/init-data/init-data.store";
import { useJobsStore } from "../../../app/stores/jobs/jobs.store";
import { JobsType } from "../../../app/mocks/types";

const filterTags = ['Full-time', 'Remote', 'Part-time', 'Contract', 'Freelance', 'Internship']

export const JobsPage: React.FC = () => {
  const platform = useInitDataStore((state: any) => state.platform);
  const jobs = useJobsStore<JobsType[]>((state: any) => state.jobs);

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
            {jobs.map((job, index) => (
              <VacancyCard jobLogo={job.jobLogo} key={index} id={job.id} jobTitle={job.jobTitle} createAt={job.createAt} company={job.company} salary={job.salary} place={job.place} tags={job.tags} isBookmark={job.isBookmark} />
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