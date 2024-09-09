import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f4f4f6',
    borderRadius: 12,
    padding: 2,
  },
  button: {
    flex: '1 0 auto',
    textAlign: 'center',
    padding: '6px 0',
    fontSize: 13,
    fontWeight: 500,
    background: 'transparent',
    border: 'none',
    outline: 'none',
  },
  buttonActive: {
    background: 'white',
    borderRadius: 10,
    boxShadow: '0 3px 1px 0 #0000000a, 0 3px 8px 0 #0000001f',
  }
})