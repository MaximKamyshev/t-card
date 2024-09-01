import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  bookmark: (inActiveColor: string, imageUrl: string) => ({
    border: 'none',
    maskImage: `url("${imageUrl}")`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    background: `${inActiveColor}`,
    cursor: 'pointer',
    width: 12,
    height: 16,
    margin: '4px 6px',
    padding: 0,
  }),
})