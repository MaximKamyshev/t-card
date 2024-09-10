import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { CustomButton } from '../custom-button';
import { SelectMenuProps } from './types';

export const SelectMenu: React.FC<SelectMenuProps> = ({ items, selectedItem, handleChange }) => {
  return (
    <div {...stylex.props(styles.container)}>
      {items.map((item, index) => (
        <CustomButton value={item} py={12} px={15} border={selectedItem !== item ? '1px solid #F2F2F5' : 'none'} isSoon={item == 'Reviews'} isDisabled={item == 'Reviews'} handlePress={() => handleChange(item)} textColor={selectedItem !== item ? 'black' : 'white'} bgColor={selectedItem !== item ? 'white' : '#00A77F'} key={index} />
      ))}
    </div>
  )
}