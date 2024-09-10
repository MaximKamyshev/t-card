import { VacancyCardProps } from "./types"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import ConfirmLogo from '../../images/for-vacancy-card/confirm.svg';
import PinLogo from '../../images/for-vacancy-card/pin.svg';
import { Bookmark } from "../bookmark";
import { Link } from "react-router-dom";
import { useJobsStore } from "../../../app/stores/jobs/jobs.store";

export const VacancyCard: React.FC<VacancyCardProps> = ({ id, jobTitle, company, salary, place, tags, createTime, isBookmark, logo, jobLogo }) => {
  const [jobs, bookmarkJob] = useJobsStore((state: any) => [state.jobs, state.bookmarkJob]);

  const handleCliclkBookmark = () => {
    bookmarkJob(id, jobs);
  }

  return (
    <Link to={`/vacancy/${id}`} {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.flexContainerJustifyBetween)}>
        <div {...stylex.props(styles.flexInfoContainer, styles.flexGrow)}>
          <div {...stylex.props(styles.logo(logo))} />
          <div {...stylex.props(styles.flexGrow)}>
            <div {...stylex.props(styles.flexContainerJustifyBetweenStart, styles.TextSectionWrapper)}>
              <div>
                <div {...stylex.props(styles.jobNameContainer)}>
                  <p {...stylex.props(styles.jobTitle)}>{jobTitle}</p>
                  {jobLogo && <div {...stylex.props(styles.jobLogo(jobLogo))} />}
                </div>
                <div {...stylex.props(styles.companyContainer)}>
                  <p {...stylex.props(styles.companyName)}>{company.name}</p>
                  {company.isConfirm && <div {...stylex.props(styles.confirmLogo(ConfirmLogo))} />}
                </div>
              </div>
              <div {...stylex.props(styles.bookmarkContainer)}>
                <p {...stylex.props(styles.createTime)}>{createTime} ago</p>
                <Bookmark activeColor='#FF0000' inActiveColor='#000000' isChecked={isBookmark !== undefined ? isBookmark : false} hadnleBookmark={handleCliclkBookmark} />
              </div>
            </div>
            <div>
              <div {...stylex.props(styles.tagsContainer)}>
                {tags.slice(0, 3).map((tag, index) => (
                  <span {...stylex.props(styles.tag)} key={index}>{tag}</span>
                ))}
              </div>
              <div {...stylex.props(styles.flexBetweenContainer)}>
                <div {...stylex.props(styles.companyContainer)}>
                  <div {...stylex.props(styles.pin(PinLogo))} />
                  <p {...stylex.props(styles.city)}>{place}</p>
                </div>
                <p {...stylex.props(styles.salaryPrice)}>${salary}<span {...stylex.props(styles.salary)}>/year</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}