import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import React from 'react';
import { ProfileInfoProps } from './types';
import bell from '../../../pages/home-page/images/bell.svg';

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ avatar, username }) => {
  return (
    <div {...stylex.props(styles.container)}>
      <img {...stylex.props(styles.avatar)} src={avatar} />
      <p {...stylex.props(styles.name)}>{username}</p>
    </div>
  )
}