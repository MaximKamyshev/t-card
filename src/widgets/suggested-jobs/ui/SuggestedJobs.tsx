import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Link } from 'react-router-dom';
import { SuggestedJobCard } from '../../../shared/ui/suggested-job-card';

const suggestedCards = [
  {
    id: 0,
    jobTitle: 'FrontEnd Dev',
    companyName: 'T - Card',
    firstColor: '#00A77F',
    secondColor: '#1c9275',
    isBookmark: true,
    salary: '195,000',
    city: 'Remote',
    tags: [
      '2-3 Years',
      'Full - Time',
      'Redux',
    ]
  },
  {
    id: 1,
    jobTitle: 'BackEnd Dev',
    companyName: 'T - Card',
    firstColor: '#0088FF',
    secondColor: '#096dca',
    isBookmark: false,
    salary: '195,000',
    city: 'Remote',
    tags: [
      '2-3 Years',
      'Full - Time',
      'MiniApps',
    ]
  },
  {
    id: 2,
    jobTitle: 'Product Designer',
    companyName: 'Uniswap',
    firstColor: '#121A26',
    secondColor: '#414751',
    isBookmark: false,
    salary: '195,000',
    city: 'Remote',
    tags: [
      'Remote',
      'Full - Time',
      'Figma',
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