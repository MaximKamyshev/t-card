import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import firstSectionImage from '../images/first-section.webp';
import secondSectionImage from '../images/second-section.webp';
import thirdSectionImage from '../images/third-section.webp';
import fourthSectionImage from '../images/fourth-section.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInitDataStore } from '../../../app/stores/init-data.store';

export const OnboardPage: React.FC = () => {
  const platform = useInitDataStore((state: any) => state.platform);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage === 4) {
      navigate('/home', { replace: true })
    }
  }

  return (
    <main>
      <section {...stylex.props(currentPage === 1 ? styles.fullContainer : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.image(firstSectionImage))} />
        <div {...stylex.props(styles.infoContainer)}>
          <p {...stylex.props(styles.text(310))}>Get your Dream Job! with <span {...stylex.props(styles.greenText)}>T - Card</span></p>
          <button onClick={handleClick} {...stylex.props(styles.button)}>Let’s Start</button>
        </div>
      </section>
      <section {...stylex.props(currentPage === 2 ? styles.fullContainer : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.secondImage(secondSectionImage))} />
        <div {...stylex.props(styles.infoContainer)}>
          <p {...stylex.props(styles.text(310))}>This is a test version of the <span {...stylex.props(styles.greenText)}>T - Card</span></p>
          <p {...stylex.props(styles.description('center'))}>We want to create a really quality product, so we are releasing this version of the app to get suggestions for improvements and suggestions for the app</p>
          <button onClick={handleClick} {...stylex.props(styles.button)}>Continue</button>
          <p {...stylex.props(styles.version)}>T - Card Version: <span{...stylex.props(styles.testText)}>Test</span> <span {...stylex.props(styles.versionNumber)}>0.0.01</span></p>
        </div>
      </section>
      <section {...stylex.props(currentPage === 3 ? styles.fullContainer : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.image(thirdSectionImage))} />
        <div {...stylex.props(styles.infoContainer)}>
          <p {...stylex.props(styles.text(320))}><span {...stylex.props(styles.greenText)}>Earn coins</span> for activities in the T Card app!</p>
          <p {...stylex.props(styles.description('center'))}>Exchange your earned coins for premium accounts, free job listings, participate in Airdrop and more!</p>
          <button onClick={handleClick} {...stylex.props(styles.button)}>Continue</button>
        </div>
      </section>
      <section {...stylex.props(currentPage === 4 ? styles.container(fourthSectionImage) : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.infoContainer)}>
          <p {...stylex.props(styles.textLeft(310))}><span {...stylex.props(styles.greenText)}>Features</span> of the Test Version</p>
          <p {...stylex.props(styles.description('left'))}>The app is still under development, but we are already giving the first users the opportunity to review and give feedback</p>
          <p {...stylex.props(styles.importantText)}>Important, data about companies other than T-Card is MockData (Fake Data).</p>
          <p {...stylex.props(styles.listTitle)}>For <span {...stylex.props(styles.greenText)}>Employers</span>:</p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.description('left'))}>Leave a request to add your company/post your ad to find employees</li>
          </ul>
          <p {...stylex.props(styles.listTitle)}>For <span {...stylex.props(styles.greenText)}>Employees</span>:</p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.description('left'))}>Leave your vacancy for employers</li>
            <li {...stylex.props(styles.description('left'))}>Respond to existing vacancies from T - Card</li>
          </ul>
          <p {...stylex.props(styles.listTitle)}>For <span {...stylex.props(styles.greenText)}>All</span>:</p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.description('left'))}>Complete tasks and get coins!</li>
            <li {...stylex.props(styles.description('left'))}><span {...stylex.props(styles.greenText)}>Invite your friends</span> through the referral program!</li>
            <li {...stylex.props(styles.description('left'))}>Find <span>bugs</span> and <span>improvements</span> for our service - we are open to any suggestions</li>
          </ul>
          <button onClick={handleClick} {...stylex.props(styles.button)}>Open</button>
        </div>
      </section>
    </main>
  )
}