import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import ShareLogo from "../../images/for-share-button/share.svg";
import { ShareButtonProps } from './types';
export const ShareButton: React.FC<ShareButtonProps> = ({ title, text, id }) => {
  const handleClick = () => {
    navigator.share({
      title: title,
      url: `https://t.me/test1X_bot/Tcard?startapp=company!${id}`,
      text: text,
    })
  }
  return (
    <button onClick={handleClick} {...stylex.props(styles.container(ShareLogo))}></button>
  )
}