import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import firstSectionImage from '../images/first-section.webp';
import secondSectionImage from '../images/second-section.webp';
import thirdSectionImage from '../images/third-section.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const OnboardPage: React.FC = () => {
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
      <section {...stylex.props(currentPage === 1 ? styles.fullContainer : styles.invisible)}>
        <div {...stylex.props(styles.image(firstSectionImage))} />
        <p {...stylex.props(styles.text)}>Get your Dream Job! with <span {...stylex.props(styles.greenText)}>T - Card</span></p>
        <button onClick={handleClick} {...stylex.props(styles.button)}>Let’s Start</button>
      </section>
      <section {...stylex.props(currentPage === 2 ? styles.fullContainer : styles.invisible)}>
        <div {...stylex.props(styles.secondImage(secondSectionImage))} />
        <p {...stylex.props(styles.text)}>This is a test version of the <span {...stylex.props(styles.greenText)}>T - Card</span></p>
        <p {...stylex.props(styles.description)}>We want to create a really quality product, so we are releasing this version of the app to get suggestions for improvements and suggestions for the app</p>
        <button onClick={handleClick} {...stylex.props(styles.button)}>Continue</button>
        <p {...stylex.props(styles.version)}>T - Card Version: <span{...stylex.props(styles.testText)}>Test</span> <span {...stylex.props(styles.versionNumber)}>0.0.01</span></p>
      </section>
      <section {...stylex.props(currentPage === 3 ? styles.fullContainer : styles.invisible)}>
        <div {...stylex.props(styles.image(thirdSectionImage))} />
        <p {...stylex.props(styles.text)}><span {...stylex.props(styles.greenText)}>Earn coins</span> for activities in the T Card app!</p>
        <p {...stylex.props(styles.description)}>Exchange your earned coins for premium accounts, free job listings, participate in Airdrop and more!</p>
        <button onClick={handleClick} {...stylex.props(styles.button)}>Continue</button>
      </section>
      <section {...stylex.props(currentPage === 4 ? styles.container : styles.invisible)}>
        <p {...stylex.props(styles.text)}><span {...stylex.props(styles.greenText)}>Features</span> of the Test Version</p>
        <p {...stylex.props(styles.description)}>The app is still under development, but we are already giving the first users the opportunity to review and give feedback</p>
        <p {...stylex.props(styles.importantText)}>Important, data about companies other than T-Card is MockData (Fake Data).</p>
        <button onClick={handleClick} {...stylex.props(styles.button)}>Open</button>
      </section>
    </main>
  )
}