import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  title: {
    fontSize: 20,
    margin: 0,
  },
  subtitle: {
    margin: 0,
  },
  container: {
    padding: '0 5px',
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
})