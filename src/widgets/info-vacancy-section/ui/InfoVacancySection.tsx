import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { InfoVacancySectionProps } from './types';

export const InfoVacancySection: React.FC<InfoVacancySectionProps> = ({ logo, companyName, jobTitle, salary, tags }) => {
  return (
    <section>
      <div {...stylex.props(styles.flexInfoContainer)}>
        <div {...stylex.props(styles.logo(logo !== undefined ? logo : ''))} />
        <p {...stylex.props(styles.companyName)}>{companyName}</p>
      </div>
      <div {...stylex.props(styles.flexBetweenContainer)}>
        <p {...stylex.props(styles.vacancy)}>{jobTitle}</p>
        <p {...stylex.props(styles.salaryPrice)}>${salary}<span {...stylex.props(styles.salary)}>/year</span></p>
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