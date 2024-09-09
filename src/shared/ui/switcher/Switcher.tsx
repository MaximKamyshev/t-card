import { SwitcherProps } from "./typses";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useBookmarksSectionsStore } from "../../../app/stores/booksmarks-sections/booksmarks-sections.store";

export const Switcher: React.FC<SwitcherProps> = ({ items }) => {
  const [currentSection, updateCurrentSection] = useBookmarksSectionsStore((state: any) => [state.currentSection, state.updateCurrentSection]);

  const handleClick = (item: string) => {
    updateCurrentSection(item.toLowerCase());
  }

  return (
    <div {...stylex.props(styles.container)}>
      {items.map((item, index) => (
        <button onClick={() => handleClick(item)} {...stylex.props(styles.button, currentSection.toLowerCase() === item.toLowerCase() && styles.buttonActive)} key={index}>{item}</button>
      ))}
    </div>
  )
}