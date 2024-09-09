import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  title: {
    margin: 0,
    fontSize: 17,
  },
  reward: {
    color: '#707579',
    fontSize: 15,
    margin: '2px 0 0 0',
  },
  button: {
    width: 65,
    height: 28,
    fontSize: 12,
    fontWeight: 600,
    background: '#6C6C6C',
    color: 'white',
    border: 'none',
    borderRadius: 20,
    flexShrink: 0,
  },
  buttonClaim: {
    width: 65,
    height: 28,
    fontSize: 12,
    fontWeight: 600,
    color: 'white',
    border: 'none',
    borderRadius: 20,
    flexShrink: 0,
    background: '#00A77F',
  },
  logo: (imageUrl: string) => ({
    width: 28,
    height: 28,
    background: `url("${imageUrl}") center / contain no-repeat`,
    flexShrink: 0,
  }),
  bottomLine: {
    display: 'flex',
    borderBottom: '1px solid #f0f0f0',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1 0 auto',
    padding: '12px 0',
  }
})