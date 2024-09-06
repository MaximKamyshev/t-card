import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import filterImage from '../../images/for-filter-sort-button/filter.svg';
import sortImage from '../../images/for-filter-sort-button/sort.svg';

export const FilterSortButton: React.FC = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <button {...stylex.props(styles.filterButton)}>
        <div {...stylex.props(styles.logo(filterImage))} />
        <span>Filter</span>
      </button>
      <span {...stylex.props(styles.line)} />
      <button {...stylex.props(styles.sortButton)}>
        <div {...stylex.props(styles.logo(sortImage))} />
        <span>Sort</span>
      </button>
    </div>
  )
}