import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import searchImage from '../../images/for-search-input/search.svg';
import { useState } from 'react';

export const SearchInput: React.FC = () => {
  const [isFocus, setIsFocus] = useState(false)
  const handleFocus = () => {
    setIsFocus(!isFocus)
  }
  return (
    <div {...stylex.props(isFocus ? styles.containerActive : styles.container)}>
      <button {...stylex.props(styles.button(searchImage))}></button>
      <input onBlur={handleFocus} onFocus={handleFocus} {...stylex.props(styles.input)} type="text" placeholder='Search..' />
    </div>
  )
} 