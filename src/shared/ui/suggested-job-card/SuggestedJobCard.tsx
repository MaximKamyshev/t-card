import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SuggestedJobCardProps } from './types';
import PinIcon from '../../images/for-suggested-job-card/pin.svg';
import { Bookmark } from '../bookmark';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SuggestedJobCard: React.FC<SuggestedJobCardProps> = ({ jobLogo, id, firstColor, secondColor, jobTitle, company, isBookmark, salary, place, tags }) => {
  const [isCheckedBookmark, setIscheckedBookmark] = useState(isBookmark)

  return (
    <Link to={`/vacancy/${id}`} {...stylex.props(styles.card(firstColor))}>
      <div {...stylex.props(styles.flexContainer)}>
        <div {...stylex.props(styles.flexInfoContainer)}>
          <div {...stylex.props(styles.bIcon(secondColor, company.logo))} />
          <div {...stylex.props(styles.infoContainer)}>
            <div {...stylex.props(styles.jobNameContainer)}>
              <p {...stylex.props(styles.jobTitle)}>{jobTitle}</p>
              {jobLogo && <div {...stylex.props(styles.jobLogo(jobLogo))} />}
            </div>
            <p {...stylex.props(styles.companyName)}>{company.name}</p>
          </div>
        </div>
        <Bookmark activeColor='#FF0000' inActiveColor={secondColor} isChecked={isCheckedBookmark !== undefined ? isCheckedBookmark : false} hadnleBookmark={() => {setIscheckedBookmark(!isCheckedBookmark)}} />
      </div>
      <div {...stylex.props(styles.tagsContainer)}>
        {tags.slice(0, 3).map((tag, index) => (
          <p key={index} {...stylex.props(styles.tag(secondColor))}>{tag}</p>
        ))}
      </div>
      <div {...stylex.props(styles.flexBetweenContainer)}>
        <div {...stylex.props(styles.flexCenterContainer)}>
          <div {...stylex.props(styles.pin(secondColor, PinIcon))} />
          <p {...stylex.props(styles.city(secondColor))}>{place}</p>
        </div>
        <p {...stylex.props(styles.salary(secondColor))}><span {...stylex.props(styles.salaryPrice)}>${salary}</span>/year</p>
      </div>
    </Link>
  )
}