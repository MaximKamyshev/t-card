import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  mainContainer: {
    padding: '0 15px',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 0',
  },
  logo: (imageUrl: string) => ({
    background: `url("${imageUrl}") center / contain no-repeat`,
    width: 36,
    height: 36,
  }),
  stackContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    padding: '0 10px'
  },
  lastStackContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    padding: '0 0 0 10px',
  },
  firstStackContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    padding: '0 10px 0 0',
    justifyContent: 'space-between'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 7,
    padding: '5px 0'
  },
  greeLine: {
    width: 1,
    height: 24,
    background: '#00A77F',
  },
  stackText: {
    fontSize: 18,
    margin: 0,
    padding: '4px 5px'
  },
  link: {
    fontSize: 14,
    color: '#00A77F',
    textDecoration: 'none',
    fontWeight: 600,
  },
  sectionName: {
    fontSize: 17,
    margin: 0,
  },
  flexBetweenContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    justifyContent: 'space-between',
    margin: '15px 5px 20px 5px',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  bookmarkButton: {
    width: 46,
    height: 46,
    outline: 'none',
    border: 'none',
    background: 'white',
    borderRadius: '50%',
    boxShadow: '0px 6px 16px #AEAEAE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  applyButton: {
    outline: 'none',
    textAlign: 'center',
    fontSize: 17,
    color: '#00A77F',
    border: 'none',
    background: 'white',
    padding: '0 20px',
    height: 46,
    borderRadius: '50px',
    boxShadow: '0px 6px 16px #AEAEAE',
    cursor: 'pointer',
  },
  buttonsContainer: (bottomSize: number) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: `${bottomSize}px`,
    width: '100%',
    left: 0,
    padding: '0 15px',
    boxSizing: 'border-box',
  })
})