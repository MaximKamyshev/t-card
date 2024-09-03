import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 20px 15px 20px',
  },
  container: {
    padding: '0px 20px',
  },
  mainWrapper: {
    overflow: 'auto',
  }
})