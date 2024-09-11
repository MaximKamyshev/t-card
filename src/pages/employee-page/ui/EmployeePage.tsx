import { useEffect, useState } from "react";
import { JobsType } from "../../../app/mocks/types";
import { useJobsStore } from "../../../app/stores/jobs/jobs.store";
import { Avatar } from "../../../shared/ui/avatar"
import { useParams } from "react-router-dom";
import { Rating } from "../../../shared/ui/rating";
import { CustomButton } from "../../../shared/ui/custom-button";
import { SelectMenu } from "../../../shared/ui/select-menu";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import confirmLogo from '../../../shared/images/for-modal-notification/confirm.svg';
import followLogo from '../images/Vector.svg';
import { VacancyCard } from "../../../shared/ui/vacancy-card";
import { ShareButton } from "../../../shared/ui/share-button";
import { SocialLink } from "../../../shared/ui/social-link";
import websiteLogo from '../images/website.svg';
import telLogo from '../images/tel.svg';
import happBananaLogo from '../../../app/assets/lotties/happy-banana.json';
import { useModalStore } from "../../../app/stores/modal/modal.store";
import { Popup } from "../../../widgets/popup";

export const EmployeePage:  React.FC = () => {
  const jobs = useJobsStore<JobsType[]>((state: any) => state.jobs);
  const { slug } = useParams();
  const [vacancy, setVacancy] = useState(jobs.find(job => job.company.id == slug));
  const updateIsApplyModalOpen = useModalStore((state: any) => state.updateIsApplyModalOpen);
  const selectMenuValues = [
    {
      value: 'About',
      id: '123',
      isDisabled: false,
      handleChange: (value: string) => {
        setCurrentValue(value);
      }
    },
    {
      value: 'Vacancies',
      id: '1234',
      isDisabled: false,
      handleChange: (value: string) => {
        setCurrentValue(value);
      }
    },
    {
      value: 'Reviews',
      id: '1235',
      isDisabled: true,
      scaleSoon: '0.8',
      handleChange: (value: string) => {
        setCurrentValue(value);
      }
    },
    {
      value: 'Apply CV',
      id: '1236',
      isDisabled: false,
      handleChange: () => {
        updateIsApplyModalOpen(true);
      }
    }
  ];
  const [currentValue, setCurrentValue] = useState(selectMenuValues[0].id);

  useEffect(() => {
    setVacancy(jobs.find(job => job.company.id == slug));
  }, [jobs, slug])

  return (
    <main {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.avatarContainer)}>
        <Avatar size={130} image={vacancy?.company.logo ? vacancy.company.logo : ''} tasksProcent={20} inviteProcent={20} rewardsProcent={60} />
      </div>
      <div {...stylex.props(styles.justifyContainer)}>
        <div>
          <div {...stylex.props(styles.jobContaiener)}>
            <p {...stylex.props(styles.companyName)}>{vacancy?.company.name}</p>
            {vacancy?.company.isVerified && <div {...stylex.props(styles.jobLogo(confirmLogo))} />}
          </div>
          <div {...stylex.props(styles.infoContainer)}>
            <Rating size={18} textSize={14} textColor='black' />
            <p {...stylex.props(styles.reviewText)}>18 Reviews</p>
          </div>
        </div>
        <div>
          <CustomButton value="Follow" px={20} py={12} bgColor="#00A77F" imagePosition="left" imageUrl={followLogo} logoGap={9} imageSize={20} textColor="white" />
        </div>
      </div>
      <SelectMenu selectedItem={currentValue} items={selectMenuValues} bgColor="white" bgColorActive="black" textColor="black" textColorActive="white" border='1px solid #F2F2F5' borderActive='1px solid #F2F2F5' />
      {currentValue === '123' ?
        <>
          <p {...stylex.props(styles.aboutText)}>The application allows you to exchange text, voice and video messages, as well as stickers, photos and files in many formats[8]. It also allows you to make audio and video calls, organize conferences and live broadcasts, store an unlimited number of files[⇨], maintain channels (microblogs)[⇨], create and use bots[⇨]. Telegram apps are available for Android, iOS, Windows, macOS, and Linux Pavel Durov, a strong advocate of internet freedom, claims that Telegram has a high degree of data privacy. </p>
          <div {...stylex.props(styles.socialContainer)}>
            {vacancy?.company.social?.map((social, index) => (
              <SocialLink imageUrl={social.type === 'link' ? websiteLogo : telLogo} key={index} {...social} />
            ))}
          </div>
        </>
      : currentValue === '1234' &&
        <>
          <p {...stylex.props(styles.vacanciesText)}>{jobs.filter(job => job.company.id === vacancy?.company?.id).length} active {jobs.filter(job => job.company.id === vacancy?.company?.id).length == 1 ? 'vacancy' : 'vacancies'}</p>
          <div {...stylex.props(styles.cardsContainer)}>
          {jobs.filter(job => job.company.id === vacancy?.company?.id).map((card) => (
            <VacancyCard key={card.id} {...card} />
          ))}
          </div>
        </>
      }
      <div {...stylex.props(styles.shareButtonContainer)}>
        <ShareButton id={vacancy?.company.id ? vacancy.company.id : ''} text={`Empolyee ${vacancy?.company.name}`} />
      </div>
      <Popup isCloseButton={true} modalName='isApplyModalOpen' methodName='updateIsApplyModalOpen' animationData={happBananaLogo} text='Your response has been sent to the employer!' subscription="You will receive the employer's decision in our bot" buttonText='Continue' />
    </main>
  )
}