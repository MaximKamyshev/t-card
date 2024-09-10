import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  text: (textColor?: string) => ({
    fontWeight: 300,
    margin: 0,
    color: textColor ? textColor : '#6E6E6E',
    lineHeight: '24px'
  }),
  circle: {
    display: 'inline-block',
    width: 3,
    height: 3,
    borderRadius: '50%',
    backgroundColor: '#6E6E6E',
    flexShrink: 0,
    margin: '11px 0 0 10px'
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'start',
    gap: 8
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  }
})