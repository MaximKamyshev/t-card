import { VacancyFieldProps } from "./types"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const VacancyField: React.FC<VacancyFieldProps> = ({ fields }) => {
  return (
    <div {...stylex.props(styles.mainContainer)}>
      {fields.map((field, index) => (
        field.type === 'text' ? 
          <p key={index} {...stylex.props(styles.text(field.color))}>{field.content}</p>
        : field.type === 'list' &&
          <div key={index} {...stylex.props(styles.flexContainer)}>
            <span {...stylex.props(styles.circle)} />
            <p {...stylex.props(styles.text(field.color))}>{field.content}</p>
          </div>
      ))}
    </div>
  )
}