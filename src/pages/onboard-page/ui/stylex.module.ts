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
  iosPadding: {
    paddingBottom: 49,
  },
  container: (imageUrl: string) => ({
    background: `url(${imageUrl}) top / contain no-repeat`,
    backgroundColor: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
    boxSizing: 'border-box',
  }),
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
  text: (maxWidth: string | number) => ({
    maxWidth: maxWidth,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 500,
    margin: 0,
  }),
  textLeft: (maxWidth: string | number) => ({
    maxWidth: maxWidth,
    textAlign: 'left',
    fontSize: 32,
    paddingTop: 57,
    fontWeight: 500,
    margin: 0,
  }),
  infoContainer: {
    padding: '0 26px',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  infoContainerCenter: {
    padding: '0 26px',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
  },
  description: (align: string) => ({
    text: 15,
    fontWeight: 300,
    color: '#6C6C6C',
    maxWidth: 340,
    textAlign: align,
    margin: 0,
  }),
  list: {
    text: 15,
    fontWeight: 300,
    color: '#6C6C6C',
    margin: 0,
    paddingLeft: 20,
  },
  importantText: {
    color: '#CF000A',
    margin: 0,
    marginTop: 15,
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
    alignSelf: 'center'
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 500,
    margin: 0,
  }
})