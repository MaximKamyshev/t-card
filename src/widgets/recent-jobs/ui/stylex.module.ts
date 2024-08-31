import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  descriptionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    margin: '0 0 15px 0',
  },
  link: {
    fontSize: 14,
    color: '#00A77F',
    textDecoration: 'none',
    fontWeight: 600,
  },
  sectionName: {
    fontSize: 18,
    margin: 0,
  },
  paddingContainer: {
    padding: '0 15px',
  },
  jobsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    margin: '29px 0 0 0',
  }
})