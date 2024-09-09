import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  header: {
    padding: '15px 20px 18px 20px',
  },
  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 500,
  },
  container: {
    padding: '0px 15px',
  },
  jobsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    margin: '14px 0 0 0'
  },
  jobsFoundText: {
    margin: '18px 0 0 0',
    fontSize: 18,
  },
  notFoundContainer: {
    paddingTop: 105,
  }
})