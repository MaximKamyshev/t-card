import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { NotFoundProps } from './types';
import Lottie from 'react-lottie';

export const NotFound: React.FC<NotFoundProps> = ({ title, description, animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div {...stylex.props(styles.notFoundContaier)}>
      <Lottie 
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={222}
        width={222}
      />
      <p {...stylex.props(styles.notFoundTitle)}>{title}</p>
      <p {...stylex.props(styles.notFoundDescription)}>{description}</p>
    </div>
  );
}