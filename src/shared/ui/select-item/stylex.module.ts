import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    padding: '13px 16px',
    border: '1px solid #F2F2F5',
    borderRadius: 8,
    background: 'white',
    cursor: 'pointer',
    outline: 'none',
    width: '100%',
    сolor: 'black',
  },
  text: {
    margin: 0,
    fontWeight: 300,
    сolor: 'black',
  },
  circleActive: (imageUrl: string) => ({
    display: 'inline-block',
    width: 24,
    height: 24,
    border: '2px solid transparent',
    borderRadius: '50%',
    background: `#00A77F url("${imageUrl}") center / 11px 11px no-repeat`,
  }),
  circle: {
    borderRadius: '50%',
    display: 'inline-block',
    width: 24,
    height: 24,
    border: '2px solid rgba(0, 0, 0, 0.05)',
  },
  disabledText: {
    color: '#888888',
  },
  disabledContainer: {
    pointerEvents: 'none',
  }
})