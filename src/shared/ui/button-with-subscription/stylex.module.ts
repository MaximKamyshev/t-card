import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    gap: 7,
    textDecoration: 'none',
  },
  buttonImage: (logoUrl: string) => ({
    maskImage: `url("${logoUrl}")`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    backgroundColor: '#959595',
    width: 20,
    height: 20,
  }),
  buttonImageActive: (logoUrl: string) => ({
    maskImage: `url("${logoUrl}")`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    backgroundColor: '#00A77F',
    width: 20,
    height: 20,
  }),
  subscription: {
    fontSize: 10,
    fontWeight: 'medium',
    color: '#959595',
  },
  subscriptionActive: {
    fontSize: 10,
    fontWeight: 'medium',
    color: '#00A77F',
  }
})