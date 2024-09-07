import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 17.5px',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 11,
    margin: '12px 0',
  },
  points: {
    fontSize: 20,
    margin: '19px 0 25px 0'
  },
  name: {
    fontSize: 24,
    fontWeight: 500,
    margin: '20px 0 10px 0',
  },
  greenText: {
    color: '#00A77F',
  },
  ivites: {
    fontSize: 14,
    margin: 0,
  },
  description: {
    fontSize: 15,
    fontWeight: 300,
    color: '#6C6C6C',
    textAlign: 'center',
    margin: '8px 0 0 0'
  },
  problemsCardContainer: {
    borderRadius: 16,
    border: '1px solid #d9d9d9',
    padding: 20,
    margin: '17px 0 0 0'
  },
  notifLogo: (imageUrl: string) => ({
    width: 24,
    display: 'block',
    height: 24,
    background: `url(${imageUrl}) center / contain no-repeat`,
  }),
  notifText: {
    fontSize: 15,
    color: '#717171',
    margin: '11px 0 15px 0',
  },
  notifLink: {
    padding: '8px 16px',
    fontSize: 15,
    color: 'white',
    background: "#131F1C",
    borderRadius: 20,
    fontWeight: 600,
    textDecoration: 'none',
    flex: '1 0 auto',
  },
  notifGreenText: {
    fontSize: 11,
    color: '#00A77F',
    textAlign: 'right',
    margin: 0,
  },
  felxBetweenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})