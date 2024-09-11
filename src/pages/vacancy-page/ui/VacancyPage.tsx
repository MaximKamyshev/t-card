import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { InfoVacancySection } from "../../../widgets/info-vacancy-section";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { SelectMenu } from "../../../shared/ui/select-menu";
import { DescriptionVacancySection } from "../../../widgets/description-vacancy-section";
import { VacancyCard } from "../../../shared/ui/vacancy-card";
import { Bookmark } from "../../../shared/ui/bookmark";
import { useInitDataStore } from "../../../app/stores/init-data/init-data.store";
import { useJobsStore } from "../../../app/stores/jobs/jobs.store";
import { JobsType } from "../../../app/mocks/types";
import { ModalNotification } from "../../../shared/ui/modal-notification";
import { DescriptionCompanySection } from "../../../widgets/description-company-section";
import { useModalStore } from "../../../app/stores/modal/modal.store";
import { Popup } from "../../../widgets/popup";
import tiredBananaLottie from "../../../app/assets/lotties/banana-tired.json";

export const VacancyPage: React.FC = () => {
  const [jobs, bookmarkJob] = useJobsStore<[JobsType[], (id: string | undefined,  jobs: JobsType[]) => void]>((state: any) => [state.jobs, state.bookmarkJob]);
  const selectMenuValues = [
    {
      value: 'Description',
      id: '123',
      isDisabled: false,
      handleChange: (value: string) => {
        setCurrentValue(value);
      }
    },
    {
      value: 'Company',
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
      handleChange: (value: string) => {
        setCurrentValue(value);
      }
    },
  ];
  const [currentValue, setCurrentValue] = useState(selectMenuValues[0].id);
  const { slug } = useParams();
  const [vacancy, setVacancy] = useState(jobs.find(vacancy => vacancy.id == slug));
  const platform = useInitDataStore((state: any) => state.platform);
  const updateIsApplyModalOpen = useModalStore((state: any) => state.updateIsApplyModalOpen);
  const handleCliclkBookmark = () => {
    bookmarkJob(vacancy?.id, jobs);
  }

  useEffect(() => {
    document.getElementById('vacancy')?.scrollTo(0, 0);
    setCurrentValue(selectMenuValues[0].id);
  }, [slug])

  useEffect(() => {
    setVacancy(jobs.find(vacancy => vacancy.id == slug));
  }, [jobs, slug])

  return (
    <main>
      <InfoVacancySection logo={vacancy?.company.logo} jobTitle={vacancy?.jobTitle} tags={vacancy?.tags} salary={vacancy?.salary} />
      <div {...stylex.props(styles.mainContainer)}>
        <SelectMenu selectedItem={currentValue} items={selectMenuValues} bgColor="white" bgColorActive="#00A77F" textColor="black" textColorActive="white" border='1px solid #F2F2F5' borderActive='1px solid transparent' />
        {currentValue === '123' && 
          <>
            {vacancy?.stacks && <p {...stylex.props(styles.stackText)}>Stack required:</p>}
            <div {...stylex.props(styles.wrapper)}>
              {vacancy?.stacks?.map((stack, index) => (
                <Fragment key={index}>
                  <div key={index} {...stylex.props(index === 0 ? styles.firstStackContainer : vacancy?.stacks && index === vacancy?.stacks.length - 1 ? styles.lastStackContainer : styles.stackContainer)}>
                    <div {...stylex.props(styles.logo(stack.logo))} />
                    <span>{stack.name}</span>
                  </div>
                  {vacancy?.stacks && index !== vacancy?.stacks.length - 1 && <span {...stylex.props(styles.greeLine)} />}
                </Fragment>
              ))}
            </div>
            {vacancy?.description &&
              <DescriptionVacancySection description={vacancy.description} />
            }
          </>
        }
        {currentValue === '1234' &&
          <>
            <ModalNotification isRating={true} isConfirm={vacancy?.company?.isVerified} title={vacancy?.company.name ? vacancy.company.name : ''} description="Start exploring Telegram from a new angle" linkText="Open" linkPath={`/employee/${vacancy?.company.id}`} />
            {vacancy?.description &&
              <DescriptionCompanySection description={vacancy.description} />
            }
          </>
 
        }
        <div {...stylex.props(styles.flexBetweenContainer)}>
          <p {...stylex.props(styles.sectionName)}>{currentValue === '123' ? 'Suggested Jobs' : "Company's vacancies" }</p>
          <Link {...stylex.props(styles.link)} to='/Jobs'>All</Link>
        </div>
        {currentValue === '1234' ?
        <div {...stylex.props(styles.cardsContainer)}>
          {jobs.filter(job => job.company.id === vacancy?.company?.id).splice(0, 3).map((card) => (
            <VacancyCard key={card.id} {...card} />
          ))}
        </div>
        :
        <div {...stylex.props(styles.cardsContainer)}>
          {jobs.filter(vacancy => vacancy.id !== slug).splice(0, 3).map((card) => (
            <VacancyCard key={card.id} {...card} />
          ))}
        </div>
        }
        <div {...stylex.props(styles.buttonsContainer(platform == 'ios' ? 113 : 79))}>
          <button onClick={handleCliclkBookmark} {...stylex.props(styles.bookmarkButton)}><Bookmark activeColor='#FF0000' inActiveColor='#000000' isChecked={vacancy?.isBookmark !== undefined ? vacancy?.isBookmark : false} hadnleBookmark={() => ''} /></button>
          <button onClick={() => updateIsApplyModalOpen(true)} {...stylex.props(styles.applyButton)}>Apply Now</button>
        </div>
      </div>
      <Popup isCloseButton={true} modalName="isApplyModalOpen" methodName="updateIsApplyModalOpen" text="We couldn't find your Resume" subscription='Please create it in our bot for job response' buttonText='Create!' animationData={tiredBananaLottie} />
    </main>
  )
}