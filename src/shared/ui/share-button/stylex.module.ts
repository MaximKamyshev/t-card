import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: (imageUrl: string) => ({
    background: `url("${imageUrl}") center / contain no-repeat`,
    width: 29,
    height: 29,
    border: 'none',
  })
})