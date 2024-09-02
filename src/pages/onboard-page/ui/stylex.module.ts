import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  fullContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    gap: 15,
    paddingBottom: 15,
    boxSizing: 'border-box',
    background: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    paddingBottom: 15,
    boxSizing: 'border-box',
  },
  invisible: {
    display: 'none',
  },
  image: (imageUrl: string) => ({
    width: '100%',
    flex: '1 0 auto',
    background: `url(${imageUrl}) center / cover no-repeat`,
  }),
  secondImage: (imageUrl: string) => ({
    width: '100%',
    flex: '1 0 auto',
    background: `url(${imageUrl}) center / 80% no-repeat`,
  }),
  text: {
    maxWidth: 340,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 500,
    margin: 0,
  },
  description: {
    text: 15,
    fontWeight: 300,
    color: '#6C6C6C',
    maxWidth: 340,
    textAlign: 'center',
    margin: 0,
  },
  importantText: {
    color: '#CF000A',
  },
  version: {
    fontSize: 15,
    margin: 0,
  },
  testText: {
    color: '#6C6C6C',
    fontWeight: 300,
  },
  versionNumber: {
    color: '#00A77F',
    fontWeight: 300,
  },
  greenText: {
    color: '#00A77F',
  },
  button: {
    outline: 'none',
    border: 'none',
    background: '#00A77F',
    cursor: 'pointer',
    padding: '12.5px 0',
    color: 'white',
    fontSize: 16,
    width: 135,
    borderRadius: 15,
  }
})