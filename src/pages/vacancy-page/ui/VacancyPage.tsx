import { useParams } from "react-router-dom";
import { findedJobs } from "../../jobs-page/ui/JobsPage";
import { useState } from "react";
import { InfoVacancySection } from "../../../widgets/info-vacancy-section";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const VacancyPage: React.FC = () => {
  const { slug } = useParams();
  const [vacancy] = useState(findedJobs.find(vacancy => vacancy.id == slug));
  return (
    <main {...stylex.props(styles.mainContainer)}>
      <InfoVacancySection logo={vacancy?.logo} companyName={vacancy?.company.name} jobTitle={vacancy?.jobTitle} tags={vacancy?.tags} salary={vacancy?.salary} />
    </main>
  )
}