import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { CustomButton } from '../custom-button';
import { SelectMenuProps } from './types';

export const SelectMenu: React.FC<SelectMenuProps> = ({ items, selectedItem, bgColor, bgColorActive, textColor, textColorActive, border, borderActive }) => {
  return (
    <div {...stylex.props(styles.container)}>
      {items.map((item, index) => (
        <CustomButton value={item.value} py={12} px={10} border={selectedItem === item.id ? borderActive : border} isSoon={item.isDisabled} scaleSoon={item.scaleSoon} isDisabled={item.isDisabled} handlePress={() => item.handleChange(item.id)} textColor={selectedItem === item.id ? textColorActive : textColor} bgColor={selectedItem === item.id ? bgColorActive : bgColor} key={index} />
      ))}
    </div>
  )
}