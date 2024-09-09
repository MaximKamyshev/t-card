import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  notFoundContaier: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundImage: {
    width: 220,
    height: 220,
  },
  notFoundTitle: {
    fontSize: 20,
    margin: 0,
  },
  notFoundDescription: {
    fontSize: 17,
    margin: '4px 0 9px 0',
    color: '#707579'
  }
})