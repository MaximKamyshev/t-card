import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #F2F2F5',
    borderRadius: 12,
    padding: '11px 10px',
    gap: 6,
    background: 'transparent',
  },
  containerActive: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #F2F2F5',
    borderRadius: 12,
    padding: '11px 10px',
    gap: 6,
    background: '#f8f8f8'
  },
  button: (imageUrl: string) => ({
    width: 20,
    height: 20,
    background: `url("${imageUrl}") center / contain no-repeat`,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'block',
    flexShrink: 0,
    transition: 'opacity 0.2s ease-in-out',
    opacity: {
      default: 1,
      ':hover': 0.7
    }
  }),
  input: {
    fontFamily: 'Sf-pro-rounded',
    flex: '1 0 auto',
    border: 'none',
    outline: 'none',
    fontSize: 17,
    fontWeight: 300,
    '::placeholder': {
      color: '#D4D4D4',
    },
    background: 'transparent',
  }
})