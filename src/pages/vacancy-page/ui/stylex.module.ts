import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  header: {
    padding: '15px 20px 14px 20px'
  },
  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 500,
  },
  container: {
    padding: '0px 15px',
  },
  filterTagContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: 8,
    overflow: 'auto',
    padding: '0 15px',
    margin: '9px 0 20px 0',
  },
  jobsFoundText: {
    margin: 0,
    fontSize: 18,
  },
  jobsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    margin: '14px 0 0 0'
  },
  mainContainer: {
    padding: '0 20px',
  }
})