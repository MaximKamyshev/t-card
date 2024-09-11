import { VacancyField } from "../../../shared/ui/vacancy-field"
import { DescriptionCompanySectionProps } from "./types"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const DescriptionCompanySection: React.FC<DescriptionCompanySectionProps> = ({ description }) => {
  return (
    <section {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.title)}>Tasks:</p>
      <VacancyField fields={description.tasks} />
    </section>
  )
}