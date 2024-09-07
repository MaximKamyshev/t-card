import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: (size: number) => ({
    position: 'relative',
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  avatar: (imageUrl) => ({
    borderRadius: '50%',
    background: `url("${imageUrl}") center / cover no-repeat`,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
  }),
  loadingBorder: (deg: number) => ({
    position: 'absolute',
    width: '120%',
    height: '120%',
    transform: `rotate(${Math.round(360 / 100 * deg)}deg)`,
  })
})