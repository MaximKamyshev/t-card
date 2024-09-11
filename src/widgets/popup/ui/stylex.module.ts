import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Sf-pro-rounded',
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    margin: '24px 0 4px 0',
    textAlign: 'center',
    maxWidth: 260,
  },
  subscription: {
    fontSize: 17,
    fontWeight: 300,
    color: '#707579',
    textAlign: 'center',
    margin: 0,
    maxWidth: 260,
  },
  button: {
    fontSize: 17,
    fontWeight: 600,
    background: '#00A77F',
    borderRadius: 10,
    color: 'white',
    border: 'none',
    height: 50,
    width: '100%',
    outline: 'none',
    marginTop: 24,
  },
  clsoeButton: (imageUrl: string) => ({
    width: 28,
    height: 28,
    border: 'none',
    borderRadius: '50%',
    background: `#f5f5f5 url("${imageUrl}") center / 12px 12px no-repeat`,
    cursor: 'pointer',
    outline: 'none',
  }),
})