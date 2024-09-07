// import * as stylex from '@stylexjs/stylex';
// import { styles } from './stylex.module';
import { SelectMenuProps } from './types';

export const SelectMenu: React.FC<SelectMenuProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}