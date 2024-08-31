import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: (logoUrl: string) => ({
    background: `white url("${logoUrl}") center / 80% no-repeat`,
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    margin: '0 auto',
    position: 'fixed',
    zIndex: 101,
    bottom: 0,
    top: 0,
    opacity: 1,
    transition: 'visibility 0.3s linear,opacity 0.3s ease-in-out',
 }),
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
  logo: {
    display: 'inline-block',
    width: '21%',
    padding: '44px 20px',
  }
})