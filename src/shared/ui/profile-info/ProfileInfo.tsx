import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import React from 'react';
import { ProfileInfoProps } from './types';
import { Avatar } from '../avatar';

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ avatar, username }) => {
  return (
    <div {...stylex.props(styles.container)}>
      <Avatar image={avatar !== undefined ? avatar : ''}  size={33} tasksProcent={10} inviteProcent={20} rewardsProcent={70} />
      <p {...stylex.props(styles.name)}>{username}</p>
    </div>
  )
}