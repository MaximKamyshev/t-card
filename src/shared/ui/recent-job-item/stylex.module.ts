import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 23px 12px 12px',
    background: '#f7f7f7',
    borderRadius: 12,
  },
  logo: (imageUrl: string) => ({
    background: `url("${imageUrl}") center / contain no-repeat`,
    width: 46,
    height: 46,
    borderRadius: '11.5px',
  }),
  title: {
    margin: 0,
    fontSize: 18,
  },
  textContainer: {
    flex: '1 0 auto',
  },
  tag: {
    fontSize: 14,
    fontWeight: 300,
    color: '#D9D9D9',
  },
  tagContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  tagCircle: {
    display: 'inline-block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: '#D9D9D9',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px 9px',
  },
  buttonCircle: {
    display: 'block',
    width: 5,
    height: 5,
    borderRadius: '50%',
    border: '1.5px solid #00A77F',
  }
})