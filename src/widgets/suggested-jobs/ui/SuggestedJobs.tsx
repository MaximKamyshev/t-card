import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Link } from 'react-router-dom';
import { SuggestedJobCard } from '../../../shared/ui/suggested-job-card';
import { Jobs } from '../../../app/mocks/jobs';

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
        {Jobs.map((card) => (
          <SuggestedJobCard key={card.id} logo={card.logo} firstColor={card.firstColor} secondColor={card.secondColor} jobTitle={card.jobTitle} company={card.company} isBookmark={card.isBookmark} salary={card.salary} place={card.place} tags={card.tags} />
        ))}
      </div>
    </section>
  )
}