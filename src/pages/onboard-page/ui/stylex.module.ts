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
    paddingBottom: 56,
    boxSizing: 'border-box',
    background: 'white',
  },
  iosPadding: {
    paddingBottom: 49,
  },
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '26px 0',
    height: '100vh',
    overflow: 'auto',
  },
  invisible: {
    display: 'none',
  },
  image: (imageUrl: string) => ({
    width: '100%',
    flex: '1 0 auto',
    background: `url(${imageUrl}) center / contain no-repeat`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  infoContainer: (imageUrl: string) => ({
    background: `url(${imageUrl}) top / contain no-repeat`,
    boxSizing: 'border-box',
    padding: '0 26px',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  }),
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
    color: 'black',
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
  buttonFull: {
    outline: 'none',
    border: 'none',
    background: '#00A77F',
    cursor: 'pointer',
    padding: '12.5px 0',
    color: 'white',
    fontSize: 16,
    borderRadius: 15,
    alignSelf: 'center',
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 500,
    margin: 0,
  },
  flexContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 9,
    padding: '0 20px',
    width: '100vw',
    boxSizing: 'border-box',
  },
  languageButton: {
    color: '#00A77F',
    background: 'white',
    border: '1px solid #F2F2F5',
    borderRadius: 15,
    outline: 'none',
    padding: '12.5px 0',
    cursor: 'pointer',
    fontSize: 16,
  }
})