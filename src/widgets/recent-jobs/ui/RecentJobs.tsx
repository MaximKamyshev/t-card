import { Link } from "react-router-dom"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { ModalNotification } from "../../../shared/ui/modal-notification/ModalNotification";
import { RecentJobItem } from "../../../shared/ui/recent-job-item";
import unicornImage from "../../images/for-recent-jobs/unicorn.png";
import cryptoImage from "../../images/for-recent-jobs/crypto.png";
import tgImage from "../../images/for-recent-jobs/tg.png";
import googleImage from "../../images/for-recent-jobs/google.png";

const recentJobs = [
  {
    logo: unicornImage,
    title: 'Software Engineer',
    tags: ['Uniswap', 'Remote']
  },
  {
    logo: cryptoImage,
    title: 'Business Analytics',
    tags: ['Crypto.com', 'Remote']
  },
  {
    logo: tgImage,
    title: 'Team Lead',
    tags: ['Telegram', 'Office']
  },
  {
    logo: googleImage,
    title: 'Jn. Product Designer',
    tags: ['Google', 'Remote', 'Full - Time']
  }
]

export const RecentJobs: React.FC = () => {
  return (
    <section>
      <div {...stylex.props(styles.descriptionContainer)}>
        <p {...stylex.props(styles.sectionName)}>Recent Jobs</p>
        <Link {...stylex.props(styles.link)} to='/Jobs'>View All</Link>
      </div>
      <div {...stylex.props(styles.paddingContainer)}>
        <ModalNotification title="Join Tools Team!" description="Start exploring Telegram in a new, better way" linkText="Try it out" linkPath="#" />
        <div {...stylex.props(styles.jobsList)}>
          {recentJobs.map((job, index) => (
            <RecentJobItem key={index} logo={job.logo} title={job.title} tags={job.tags} />
          ))}
        </div>
      </div>
    </section>
  )
}