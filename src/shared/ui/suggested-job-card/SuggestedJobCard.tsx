import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SuggestedJobCardProps } from './types';
import BIcon from '../../images/for-suggested-job-card/bIcon.svg';
import PinIcon from '../../images/for-suggested-job-card/pin.svg';
import { Bookmark } from '../bookmark';
import { useState } from 'react';

export const SuggestedJobCard: React.FC<SuggestedJobCardProps> = ({ firstColor, secondColor, jobTitle, companyName, isBookmark, salary, city, tags }) => {
  const [isCheckedBookmark, setIscheckedBookmark] = useState(isBookmark)

  return (
    <article {...stylex.props(styles.card(firstColor))}>
      <div {...stylex.props(styles.flexContainer)}>
        <div {...stylex.props(styles.bIcon(secondColor, BIcon))} />
        <div {...stylex.props(styles.infoContainer)}>
          <p {...stylex.props(styles.jobTitle)}>{jobTitle}</p>
          <p {...stylex.props(styles.companyName)}>{companyName}</p>
        </div>
        <Bookmark activeColor='#FF0000' inActiveColor={secondColor} isChecked={isCheckedBookmark !== undefined ? isCheckedBookmark : false} hadnleBookmark={() => {setIscheckedBookmark(!isCheckedBookmark)}} />
      </div>
      <div {...stylex.props(styles.tagsContainer)}>
        {tags.map((tag, index) => (
          <p key={index} {...stylex.props(styles.tag(secondColor))}>{tag}</p>
        ))}
      </div>
      <div {...stylex.props(styles.flexBetweenContainer)}>
        <div {...stylex.props(styles.flexCenterContainer)}>
          <div {...stylex.props(styles.pin(secondColor, PinIcon))} />
          <p {...stylex.props(styles.city(secondColor))}>{city}</p>
        </div>
        <p {...stylex.props(styles.salary(secondColor))}><span {...stylex.props(styles.salaryPrice)}>${salary}</span>/year</p>
      </div>
    </article>
  )
}