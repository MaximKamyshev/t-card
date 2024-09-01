import { VacancyCardProps } from "./types"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import ConfirmLogo from '../../images/for-vacancy-card/confirm.svg';
import PinLogo from '../../images/for-vacancy-card/pin.svg';
import { useState } from "react";
import { Bookmark } from "../bookmark";

export const VacancyCard: React.FC<VacancyCardProps> = ({ jobTitle, company, salary, city, tags, createTime, isBookmark, logo }) => {
  const [isCheckedBookmark, setIscheckedBookmark] = useState(isBookmark);
  
  return (
    <article {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.flexContainerJustifyBetween)}>
        <div {...stylex.props(styles.flexInfoContainer)}>
          <div {...stylex.props(styles.logo(logo))} />
          <div>
            <p {...stylex.props(styles.jobTitle)}>{jobTitle}</p>
            <div {...stylex.props(styles.companyContainer)}>
              <p {...stylex.props(styles.companyName)}>{company.name}</p>
              {company.isConfirm && <div {...stylex.props(styles.confirmLogo(ConfirmLogo))} />}
            </div>
          </div>
        </div>
        <div {...stylex.props(styles.bookmarkContainer)}>
          <p {...stylex.props(styles.createTime)}>{createTime} ago</p>
          <Bookmark activeColor='#FF0000' inActiveColor='#000000' isChecked={isCheckedBookmark !== undefined ? isCheckedBookmark : false} hadnleBookmark={() => {setIscheckedBookmark(!isCheckedBookmark)}} />
        </div>
      </div>
      <div {...stylex.props(styles.tagsContainer)}>
        {tags.map((tag, index) => (
          <span {...stylex.props(styles.tag)} key={index}>{tag}</span>
        ))}
      </div>
      <div {...stylex.props(styles.flexBetweenContainer)}>
        <div {...stylex.props(styles.companyContainer)}>
          <div {...stylex.props(styles.pin(PinLogo))} />
          <p {...stylex.props(styles.city)}>{city}</p>
        </div>
        <p {...stylex.props(styles.salaryPrice)}>${salary}<span {...stylex.props(styles.salary)}>/year</span></p>
      </div>
    </article>
  )
}