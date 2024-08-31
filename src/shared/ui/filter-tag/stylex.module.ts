import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 11px',
    border: '1px solid #f2f1f4',
    borderRadius: 15,
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 16,
    fontWeight: 300,
    textWrap: 'nowrap',
  },
  closeButton: (imageUrl: string) => ({
    background: `url("${imageUrl}") center / contain no-repeat`,
    border: 'none',
    cursor: 'pointer',
    width: 8,
    height: 8,
  }),
})