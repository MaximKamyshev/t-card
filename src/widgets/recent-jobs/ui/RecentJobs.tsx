import { Link } from "react-router-dom"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { ModalNotification } from "../../../shared/ui/modal-notification/ModalNotification";
import { RecentJobItem } from "../../../shared/ui/recent-job-item";
import { Jobs } from "../../../app/mocks/jobs";

export const RecentJobs: React.FC = () => {
  return (
    <section>
      <div {...stylex.props(styles.descriptionContainer)}>
        <p {...stylex.props(styles.sectionName)}>Recent Jobs</p>
        <Link {...stylex.props(styles.link)} to='/Jobs'>View All</Link>
      </div>
      <div {...stylex.props(styles.paddingContainer)}>
        <ModalNotification title="Join Tools Team!" description="Start exploring Telegram in a new, better way" linkText="Leave request" linkPath="#" />
        <div {...stylex.props(styles.jobsList)}>
          {Jobs.map((job, index) => (
            <RecentJobItem key={index} logo={job.logo} title={job.jobTitle} tags={job.tags} />
          ))}
        </div>
      </div>
    </section>
  )
}