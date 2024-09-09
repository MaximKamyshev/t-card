import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    margin: '15px 0 0 0',
  },
  descriptionContainer: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    padding: '0 20px',
  },
  sectionName: {
    fontSize: 18,
    margin: 0,
  },
  description: {
    fontSize: 14,
    color: '#9c9c9c',
    margin: 0,
  },
  link: {
    fontSize: 14,
    color: '#00A77F',
    textDecoration: 'none',
    fontWeight: 600,
  },
  list: {
    display: 'flex',
    gap: 12,
    overflow: 'auto',
    padding: '11px 15px 23px 15px',
    margin: '5px 0 0 0',
  }
})