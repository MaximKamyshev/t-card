import { useParams } from "react-router-dom";
import { useState } from "react";
import { InfoVacancySection } from "../../../widgets/info-vacancy-section";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Jobs } from "../../../app/mocks/jobs";

export const VacancyPage: React.FC = () => {
  const { slug } = useParams();
  const [vacancy] = useState(Jobs.find(vacancy => vacancy.id == slug));
  return (
    <main {...stylex.props(styles.mainContainer)}>
      <InfoVacancySection logo={vacancy?.logo} jobTitle={vacancy?.jobTitle} tags={vacancy?.tags} salary={vacancy?.salary} />
    </main>
  )
}