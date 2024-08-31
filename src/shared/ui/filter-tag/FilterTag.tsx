import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import closeImage from '../../images/for-filter-tag/close.svg';
import { FilterTagProps } from './types';

export const FilterTag: React.FC<FilterTagProps> = ({value}) => {
  return (
    <div {...stylex.props(styles.container)}>
      <span {...stylex.props(styles.text)}>{value}</span>
      <button {...stylex.props(styles.closeButton(closeImage))}/>
    </div>
  )
}