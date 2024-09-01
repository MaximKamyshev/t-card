import { SearchInput } from "../../../shared/ui/search-input"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { FilterTag } from "../../../shared/ui/filter-tag";
import { VacancyCard } from "../../../shared/ui/vacancy-card";
import TMobileLogo from '../images/t-mobile.png';
import TgLogo from '../images/tg.png';
import AppleLogo from '../images/apple.png';

const filterTags = ['Full-time', 'Remote', 'Part-time', 'Contract', 'Freelance', 'Internship']
const findedJobs = [
  {
    id: 0,
    jobTitle: 'Sr. Web Designer',
    company: {
      name: 'T Mobile',
      isConfirm: true,
    },
    isBookmark: false,
    salary: '195,000',
    city: 'Madrid',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    logo: TMobileLogo,
  },
  {
    id: 0,
    jobTitle: 'Sr. Web Designer',
    company: {
      name: 'T Mobile',
      isConfirm: true,
    },
    isBookmark: true,
    salary: '195,000',
    city: 'Madrid',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    logo: TMobileLogo,
  },
  {
    id: 0,
    jobTitle: 'Sr. Web Designer',
    company: {
      name: 'Apple',
      isConfirm: true,
    },
    isBookmark: false,
    salary: '195,000',
    city: 'Madrid',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    logo: AppleLogo,
  },
  {
    id: 0,
    jobTitle: 'Sr. Web Designer',
    company: {
      name: 'Telegram',
      isConfirm: false,
    },
    isBookmark: false,
    salary: '195,000',
    city: 'Madrid',
    createTime: '5 hours',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ],
    logo: TgLogo,
  },
]

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
          <div {...stylex.props(styles.jobsList)}>
            {findedJobs.map((job, index) => (
              <VacancyCard key={index} {...job} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}