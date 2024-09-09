import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    padding: '30px 15px 0 15px'
  },
  title: {
    fontSize: 32,
    fontWeight: 500,
    margin: 0,
  },
  greenText: {
    color: '#00A77F',
  },
  description: {
    maxWidth: 274,
    color: '#7A7A7A',
    fontSize: 15,
    fontWeight: 300,
    margin: '0 0 9px 0',
  },
  task: {
    fontSize: 20,
    margin: '15px 0 0 0'
  },
  lowText: {
    fontSize: 15,
  }
})