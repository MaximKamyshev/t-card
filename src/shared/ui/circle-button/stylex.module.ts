import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    border: '1px solid #D8D8D8',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: (imageUrl: string) => ({
    width: 22,
    height: 22,
    background: `url("${imageUrl}") center / contain no-repeat`,
  })
})