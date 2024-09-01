import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { BookmarkProps } from './types';
import BookmarkIcon from '../../images/for-bookmark/bookmark.svg';
import ActiveBookmarkIcon from '../../images/for-bookmark/active-bookmark.svg';

export const Bookmark: React.FC<BookmarkProps> = ({ activeColor, inActiveColor, isChecked, hadnleBookmark }) => {

  return (
    <button onClick={hadnleBookmark} {...stylex.props(isChecked ? styles.bookmark(activeColor, ActiveBookmarkIcon) : styles.bookmark(inActiveColor, BookmarkIcon))} />
  )
}