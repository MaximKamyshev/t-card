import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import ShareLogo from "../../images/for-share-button/share.svg";
import { ShareButtonProps } from './types';
import { initUtils } from '@telegram-apps/sdk-react';
export const ShareButton: React.FC<ShareButtonProps> = ({ text, id }) => {
  const utils = initUtils();
  const handleClick = () => {
    utils.shareURL(`https://t.me/test1X_bot/Tcard?startapp=company=${id}`, text);
  }

  return (
    <button onClick={handleClick} {...stylex.props(styles.container(ShareLogo))}></button>
  )
}