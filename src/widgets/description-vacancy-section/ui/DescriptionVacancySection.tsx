import { VacancyField } from "../../../shared/ui/vacancy-field"
import { DescriptionVacancySectionProps } from "./types"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const DescriptionVacancySection: React.FC<DescriptionVacancySectionProps> = ({ description }) => {
  return(
    <section {...stylex.props(styles.container)}>
      <div>
        <p {...stylex.props(styles.title)}>Tasks:</p>
        <VacancyField fields={description.tasks} />
      </div>
      <div>
        <p {...stylex.props(styles.title)}>Requirements:</p>
        <VacancyField fields={description.requirements} />
      </div>
      <div>
        <p {...stylex.props(styles.title)}>Experience:</p>
        <VacancyField fields={description.experience} />
      </div>
      <div>
        <p {...stylex.props(styles.subtitle)}>Motion graphics are a big plus:</p>
        <VacancyField fields={description.plus} />
      </div>
    </section>
  )
}