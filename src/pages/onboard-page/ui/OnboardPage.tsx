import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import firstSectionImage from '../images/first-section.webp';
import secondSectionImage from '../images/second-section.webp';
import thirdSectionImage from '../images/third-section.webp';
import fourthSectionImage from '../images/fourth-section.webp';
import fifthSectionImage from '../images/fifth-section.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInitDataStore } from '../../../app/stores/init-data/init-data.store';
import { TestVersionText } from '../../../shared/ui/test-version-text/TestVersionText';
import { LanguageModal } from '../../../widgets/language-modal';
import { useModalStore } from '../../../app/stores/modal/modal.store';
import { useTranslation } from 'react-i18next';
import confusedBananaLottie from "../../../app/assets/lotties/confused-banana.json";
import Lottie from 'react-lottie';
import { useInitData } from '@telegram-apps/sdk-react';

export const OnboardPage: React.FC = () => {
  const [platform, updateRole] = useInitDataStore((state: any) => [state.platform, state.updateRole]);
  const [currentPage, setCurrentPage] = useState(1);
  const updateIsLanguageModalOpen = useModalStore((state: any) => state.updateIsLanguageModalOpen);
  const navigate = useNavigate()
  const initData = useInitData();
  const { t } = useTranslation('translation', { keyPrefix: 'onboardPage' });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: confusedBananaLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleClick = () => {
    updateIsLanguageModalOpen(false);
    setCurrentPage(currentPage + 1);
    if (currentPage === 5) {
      if (initData?.startParam?.split('!')[0] === 'company') {
        navigate(`/employee/${initData?.startParam?.split('!')[1]}`)
      }
      else {
        navigate('/home', { replace: true })
      }
    }
  }

  const handleChooseRole = (value: string) => {
    updateRole(value)
    setCurrentPage(currentPage + 1);
    if (currentPage === 5) {
      if (initData?.startParam?.split('!')[0] === 'company') {
        navigate(`/employee/${initData?.startParam?.split('!')[1]}`)
      }
      else {
        navigate('/home', { replace: true })
      }

    }
  }

  const handleChooseLanguage = () => {
    updateIsLanguageModalOpen(true);
  }

  return (
    <main>
      <section {...stylex.props(currentPage === 1 ? styles.fullContainer : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.image(firstSectionImage))} />
        <div {...stylex.props(styles.infoContainerCenter)}>
          <p {...stylex.props(styles.text(310))}>{t('firstSectionTitle.text')} <span {...stylex.props(styles.greenText)}>{t('firstSectionTitle.color')}</span></p>
          <div {...stylex.props(styles.flexContainer)}>
            <button onClick={handleClick} {...stylex.props(styles.buttonFull)}>{initData?.startParam?.toString()}</button>
            <button onClick={handleChooseLanguage} {...stylex.props(styles.languageButton)}>{t('languageButton')}</button>
          </div>
        </div>
        <LanguageModal />
      </section>
      <section {...stylex.props(currentPage === 2 ? styles.fullContainer : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.secondImage(secondSectionImage))} />
        <div {...stylex.props(styles.infoContainerCenter)}>
          <p {...stylex.props(styles.text(310))}>{t('secondSection.title.text')} <span {...stylex.props(styles.greenText)}>{t('secondSection.title.color')}</span></p>
          <p {...stylex.props(styles.description('center'))}>{t('secondSection.description')}</p>
          <button onClick={handleClick} {...stylex.props(styles.button)}>{t('secondSection.button')}</button>
          <TestVersionText />
        </div>
      </section>
      <section {...stylex.props(currentPage === 3 ? styles.fullContainer : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.image(thirdSectionImage))} />
        <div {...stylex.props(styles.infoContainerCenter)}>
          <p {...stylex.props(styles.text(380))}><span {...stylex.props(styles.greenText)}>{t('thirdSection.title.color')}</span> {t('thirdSection.title.text')}</p>
          <p {...stylex.props(styles.description('center'))}>{t('thirdSection.description')}</p>
          <button onClick={handleClick} {...stylex.props(styles.button)}>{t('thirdSection.button')}</button>
        </div>
      </section>
      <section {...stylex.props(currentPage === 4 ? styles.container : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.infoContainer(fourthSectionImage))}>
          <p {...stylex.props(styles.textLeft(310))}><span {...stylex.props(styles.greenText)}>{t('fourthSection.title.color')}</span> {t('fourthSection.title.text')}</p>
          <p {...stylex.props(styles.description('left'))}>{t('fourthSection.description')}</p>
          <p {...stylex.props(styles.importantText)}>{t('fourthSection.notification')}</p>
          <p {...stylex.props(styles.listTitle)}>{t('fourthSection.for')} <span {...stylex.props(styles.greenText)}>{t('fourthSection.employers')}</span>:</p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.description('left'))}>{t('fourthSection.employersText')}</li>
          </ul>
          <p {...stylex.props(styles.listTitle)}>{t('fourthSection.for')} <span {...stylex.props(styles.greenText)}>{t('fourthSection.employees')}</span>:</p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.description('left'))}>{t('fourthSection.employeesText')}</li>
            <li {...stylex.props(styles.description('left'))}>{t('fourthSection.employeesText2')}</li>
          </ul>
          <p {...stylex.props(styles.listTitle)}>{t('fourthSection.for')} <span {...stylex.props(styles.greenText)}>{t('fourthSection.all')}</span>:</p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.description('left'))}>{t('fourthSection.allText')}</li>
            <li {...stylex.props(styles.description('left'))}><span {...stylex.props(styles.greenText)}>{t('fourthSection.allText2.green')}</span> {t('fourthSection.allText2.text')}</li>
            <li {...stylex.props(styles.description('left'))}>{t('fourthSection.allText3.text')} <span {...stylex.props(styles.greenText)}>{t('fourthSection.allText3.green')}</span> {t('fourthSection.allText3.text2')} <span {...stylex.props(styles.greenText)}>{t('fourthSection.allText3.green2')}</span> {t('fourthSection.allText3.text3')}</li>
          </ul>
          <button onClick={handleClick} {...stylex.props(styles.button)}>{t('fourthSection.button')}</button>
        </div>
      </section>
      <section {...stylex.props(currentPage === 5 ? styles.fullContainer : styles.invisible, platform === 'ios' && styles.iosPadding)}>
        <div {...stylex.props(styles.image(fifthSectionImage))}>
          <Lottie 
            isClickToPauseDisabled={true}
            options={defaultOptions}
            height={270}
            width={270}
          />
        </div>
        <div {...stylex.props(styles.infoContainerCenter)}>
          <p {...stylex.props(styles.text(310))}>Choose the <span {...stylex.props(styles.greenText)}>role</span> to which you belong</p>
          <div {...stylex.props(styles.flexContainer)}>
            <button onClick={() => handleChooseRole('employee')} {...stylex.props(styles.buttonFull)}>I'm looking for a job</button>
            <button onClick={() => handleChooseRole('employer')} {...stylex.props(styles.languageButton)}>I'm an employer</button>
          </div>
        </div>
      </section>
    </main>
  )
}