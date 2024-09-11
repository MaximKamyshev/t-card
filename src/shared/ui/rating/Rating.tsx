import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Rate } from 'antd';
import { RatingProps } from './types';

export const Rating: React.FC<RatingProps> = ({ size, textSize, textColor }) => {
  return (
    <div {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.rating(textSize, textColor))}>5,0</p>
      <Rate style={{ fontSize: size ? size : 14, color: '#00A77F' }} disabled defaultValue={5} />
    </div>
  )
}