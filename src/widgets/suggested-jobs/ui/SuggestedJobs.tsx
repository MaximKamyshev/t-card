import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Link } from 'react-router-dom';
import { SuggestedJobCard } from '../../../shared/ui/suggested-job-card';

const suggestedCards = [
  {
    id: 0,
    jobTitle: 'Project Manager',
    companyName: 'Telegram',
    firstColor: '#00A77F',
    secondColor: '#1c9275',
    isBookmark: false,
    salary: '195,000',
    city: 'San Francisco',
    tags: [
      'Remote',
      'Full - Time',
      'Middle',
    ]
  },
  {
    id: 1,
    jobTitle: 'Project Manager',
    companyName: 'Tools',
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    city: 'San Francisco',
    tags: [
      'Remote',
      'Full - Time',
      'Middle',
    ]
  },
  {
    id: 2,
    jobTitle: 'Project Manager',
    companyName: 'Uniswap',
    firstColor: '#f73c96',
    secondColor: '#c62a77',
    isBookmark: false,
    salary: '195,000',
    city: 'San Francisco',
    tags: [
      'Remote',
      'Full - Time',
      'Senior',
    ]
  }
]

export const SuggestedJobs: React.FC = () => {
  return (
    <section {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.descriptionContainer)}>
        <div>
          <p {...stylex.props(styles.sectionName)}>Suggested Jobs</p>
          <p {...stylex.props(styles.description)}>Based on your profile details</p>
        </div>
        <Link {...stylex.props(styles.link)} to='/Jobs'>View All</Link>
      </div>
      <div {...stylex.props(styles.list)}>
        {suggestedCards.map((card, index) => (
          <SuggestedJobCard key={index} {...card} />
        ))}
      </div>
    </section>
  )
}