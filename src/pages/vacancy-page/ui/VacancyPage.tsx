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

export const VacancyPage: React.FC = () => {
  const [jobs, bookmarkJob] = useJobsStore<[JobsType[], (id: string | undefined,  jobs: JobsType[]) => void]>((state: any) => [state.jobs, state.bookmarkJob]);
  const selectMenuValues = ['Description', 'Company', 'Reviews'];
  const [currentValue, setCurrentValue] = useState(selectMenuValues[0]);
  const { slug } = useParams();
  const [vacancy, setVacancy] = useState(jobs.find(vacancy => vacancy.id == slug));
  const platform = useInitDataStore((state: any) => state.platform);

  const handleCliclkBookmark = () => {
    bookmarkJob(vacancy?.id, jobs);
  }
  const handleChange = (value: string) => {
    setCurrentValue(value);
  }

  useEffect(() => {
    setVacancy(jobs.find(vacancy => vacancy.id == slug));
  }, [jobs, slug])

  return (
    <main {...stylex.props(styles.mainContainer)}>
      <InfoVacancySection logo={vacancy?.logo} jobTitle={vacancy?.jobTitle} tags={vacancy?.tags} salary={vacancy?.salary} />
      <SelectMenu selectedItem={currentValue} handleChange={handleChange} items={selectMenuValues} />
      {vacancy?.stacks &&
        <>
          <p {...stylex.props(styles.stackText)}>Stack required:</p>
          <div {...stylex.props(styles.wrapper)}>
            {currentValue === 'Description' && vacancy?.stacks.map((stack, index) => (
              <Fragment key={index}>
                <div key={index} {...stylex.props(index === 0 ? styles.firstStackContainer : vacancy?.stacks && index === vacancy?.stacks.length - 1 ? styles.lastStackContainer : styles.stackContainer)}>
                  <div {...stylex.props(styles.logo(stack.logo))} />
                  <span>{stack.name}</span>
                </div>
                {vacancy?.stacks && index !== vacancy?.stacks.length - 1 && <span {...stylex.props(styles.greeLine)} />}
              </Fragment>
            ))}
          </div>
        </>
      }
      {currentValue === 'Company' &&
        <ModalNotification title="T - Card" description="Start exploring Telegram from a new angle" linkText="Open" linkPath="/" />
      }
      {vacancy?.description && currentValue === 'Description' &&
        <DescriptionVacancySection description={vacancy.description} />
      }
      <div {...stylex.props(styles.flexBetweenContainer)}>
        <p {...stylex.props(styles.sectionName)}>{currentValue === 'Description' ? 'Suggested Jobs' : "Company's vacancies" }</p>
        <Link {...stylex.props(styles.link)} to='/Jobs'>All</Link>
      </div>
      {currentValue === 'Company' ?
      <div {...stylex.props(styles.cardsContainer)}>
        {jobs.filter(vacancy => vacancy.company.name === 'T - Card').splice(0, 3).map((card) => (
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
        <button {...stylex.props(styles.applyButton)}>Apply Now</button>
      </div>
    </main>
  )
}