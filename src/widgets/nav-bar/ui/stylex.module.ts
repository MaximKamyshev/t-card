import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    boxSizing: 'border-box',
    maxWidth: '1000px',
    position: 'fixed',
    bottom: 0,
    padding: 9,
    background: '#ffffffbf',
    backdropFilter: 'blur(4px)',
    zIndex: 2,
    borderTop: '0.33px solid #6a6c70',
  },
  iosPadding: {
    padding: '9px 9px 34px 9px',
  }
})