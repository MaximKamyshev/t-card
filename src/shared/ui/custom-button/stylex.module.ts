import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  button: (bgColor?: string, imageUrl?: string, textColor?: string, textSize?: number, px?: number, py?: number, displayVersion?: 'flex' | 'inline-flex') => ({
    backgroundColor: bgColor ? bgColor : 'black',
    border: 'none',
    borderRadius: 15,
    color: textColor ? textColor : 'white',
    cursor: {
      default: 'pointer',
      ':disabled': 'default',
    },
    display: displayVersion ? displayVersion : 'inline-flex',
    fontSize: textSize ? textSize : 16,
    alignItems: 'center',
    gap: imageUrl ? 3 : 0,
    padding: `${py ? py : 10}px ${px ? px : 20}px`,
    textWrap: 'nowrap',
  }),
  logo: (imageUrl?: string, imageSize?: number) => ({
    display: 'inline-block',
    width: imageUrl ? `${imageSize ? imageSize : 20}px` : null,
    height: imageUrl ? `${imageSize ? imageSize : 20}px` : null,
    background: `url("${imageUrl}") center / contain no-repeat`,
  })
})