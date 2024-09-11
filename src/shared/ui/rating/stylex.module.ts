import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  rating: (textSize: number | undefined, textColor: string | undefined) => ({
    margin: '2px 0 0 0',
    fontSize: textSize ? textSize : 13,
    color: textColor ? textColor : '#707579',
    fomtFamily: 'Sf-pro-display',
  })
})