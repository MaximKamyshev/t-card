import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#00A77F',
    borderRadius: 50,
    boxShadow: '0 6px 15px 0 #AEAEAE',
  },
  logo: (imageUrl: string) => ({
    width: 20,
    height: 20,
    background: `url("${imageUrl}") center / contain no-repeat`,
  }),
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    background: 'transparent',
    border: 'none',
    borderRadius: '50%',
    fontSize: 15,
    color: 'white',
    padding: '13.5px 14px 13.5px 22px',
  },
  sortButton: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    background: 'transparent',
    border: 'none',
    fontSize: 15,
    color: 'white',
    padding: '13.5px 22px 13.5px 14px',
  },
  line: {
    display: 'inline-block',
    width: 1,
    height: 31,
    borderRadius: '50%',
    background: 'white',
  }
})