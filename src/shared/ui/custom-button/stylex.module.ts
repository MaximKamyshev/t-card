import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  button: (logoGap?: number, bgColor?: string, imagePosition?: 'right' | 'left', border?: string, imageUrl?: string, textColor?: string, textSize?: number, px?: number, py?: number, displayVersion?: 'flex' | 'inline-flex') => ({
    backgroundColor: bgColor ? bgColor : 'black',
    borderRadius: 15,
    color: textColor ? textColor : 'white',
    cursor: {
      default: 'pointer',
      ':disabled': 'default',
    },
    display: displayVersion ? displayVersion : 'inline-flex',
    fontSize: textSize ? textSize : 16,
    alignItems: 'center',
    gap: imageUrl ? logoGap ? logoGap : 3 : 0,
    padding: `${py ? py : 10}px ${px ? px : 20}px`,
    textWrap: 'nowrap',
    position: 'relative',
    flex: '1 0 auto',
    justifyContent: 'center',
    border: border ? `${border}` : 'none',
    flexDirection: imagePosition === 'left' ? 'row-reverse' : 'row',
  }),
  logo: (imageUrl?: string, imageSize?: number) => ({
    display: 'inline-block',
    width: imageUrl ? `${imageSize ? imageSize : 20}px` : null,
    height: imageUrl ? `${imageSize ? imageSize : 20}px` : null,
    background: `url("${imageUrl}") center / contain no-repeat`,
  }),
  soon: (scale?: string) => ({
    position: 'absolute',
    background: 'white',
    color: 'black',
    width: 55,
    height: 32,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    fontSize: 24,
    fontFamily: 'Reenie-beanie',
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
    right: '0',
    top: '0',
    transform: `translate(20%, -60%) rotate(15deg) scale(${scale ? scale : 1})`,
  })
})