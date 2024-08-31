import { RecentJobItemProps } from "./types";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const RecentJobItem: React.FC<RecentJobItemProps> = ({ logo, title, tags, }) => {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.logo(logo))} />
      <div {...stylex.props(styles.textContainer)}>
        <p {...stylex.props(styles.title)}>{title}</p>
        <div {...stylex.props(styles.tagContainer)}>
          {tags.map((tag, index) => (
            <div {...stylex.props(styles.tagContainer)} key={index}>
              <span {...stylex.props(styles.tag)}>{tag}</span>
              {tags.length - 1 !== index && <span {...stylex.props(styles.tagCircle)} />}
            </div>
          ))}
        </div>
      </div>
      <button {...stylex.props(styles.button)}>
        <span {...stylex.props(styles.buttonCircle)} />
        <span {...stylex.props(styles.buttonCircle)} />
        <span {...stylex.props(styles.buttonCircle)} />
      </button>
    </div>
  )
}