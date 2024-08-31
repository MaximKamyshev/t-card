import { SearchInput } from "../../../shared/ui/search-input"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { FilterTag } from "../../../shared/ui/filter-tag";

const filterTags = ['Full-time', 'Remote', 'Part-time', 'Contract', 'Freelance', 'Internship']

export const JobsPage: React.FC = () => {
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
        </div>
      </main>
    </>
  )
}