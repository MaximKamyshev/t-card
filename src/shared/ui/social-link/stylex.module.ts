import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: '12px 15px 12px 19px',
    borderRadius: 12,
    border: '1px solid #F2F2F7',
    textDecoration: 'none',
  },
  logo: (imageUrl: string, size: number) => ({
    background: `url("${imageUrl}") center / contain no-repeat`,
    width: size,
    height: size,
    flexShrink: 0,
    display: 'inline-block',
  }),
  text: {
    margin: 0,
    color: 'black',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    margin: '5px 0'
  }
})