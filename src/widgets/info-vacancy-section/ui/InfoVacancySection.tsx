import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { InfoVacancySectionProps } from './types';

export const InfoVacancySection: React.FC<InfoVacancySectionProps> = ({ logo, jobTitle, salary, tags }) => {
  return (
    <section>
      <div {...stylex.props(styles.flexInfoContainer)}>
        <div {...stylex.props(styles.logo(logo !== undefined ? logo : ''))} />
        <div {...stylex.props(styles.flexContainer)}>
          <p {...stylex.props(styles.vacancy)}>{jobTitle}</p>
          <p {...stylex.props(styles.salaryPrice)}>${salary}<span {...stylex.props(styles.salary)}>/year</span></p>
          <p {...stylex.props(styles.respondedPeople)}>Responded: <span {...stylex.props(styles.greenText)}>00</span> people</p>
        </div>
      </div>
      <div {...stylex.props(styles.tagsContainer)}>
        {tags && tags.map((tag, index) => (
          <span {...stylex.props(styles.tag)} key={index}>{tag}</span>
        ))}
      </div>
      <p {...stylex.props(styles.date)}>Posted on <span ></span></p>
    </section>
  )
}