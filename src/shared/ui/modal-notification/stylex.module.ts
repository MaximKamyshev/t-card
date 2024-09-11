import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  hidden: {
    display: 'none',
  },
  container: (imageUrl: string) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 12,
    background: `url("${imageUrl}") center / cover no-repeat`,
  }),
  logo: (imageUrl: string, size: number) => ({
    background: `url("${imageUrl}") center / contain no-repeat`,
    width: size,
    height: size,
    display: 'inline-block',
  }),
  title: {
    fontSize: 17,
    fontWeight: 500,
    fontFamily: 'Sf-pro-display',
    margin: 0,
    color: 'white',
  },
  description: {
    fontSize: 15,
    fontWeight: 400,
    fontFamily: 'Sf-pro-display',
    margin: '2px 0 0 0',
    color: '#ffffffcc',
    maxWidth: 300,
  },
  link: {
    fontSize: 15,
    fontWeight: 600,
    fontFamily: 'Sf-pro-display',
    padding: '8px 12px',
    borderRadius: 12,
    margin: '12px 0 0 0',
    textDecoration: 'none',
    color: 'black',
    background: 'white',
    display: 'inline-block',
  },
  closeButton: (imageUrl: string) => ({
    cursor: 'pointer',
    background: `url("${imageUrl}") center / contain no-repeat`,
    width: 12,
    height: 12,
    margin: 8,
  }),
  confirmContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  rating: {
    margin: '2px 0 0 0',
    fontSize: 13,
    color: '#707579',
    fomtFamily: 'Sf-pro-display',
  }
})