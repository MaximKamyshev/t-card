import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    padding: '0 20px',
    position: 'relative',
  },
  shareButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '50px 0 20px 0',
    justifyContent: 'center',
  },
  companyName: {
    fontSize: 24,
    fontWeight: 500,
    margin: 0,
  },
  jobLogo: (imageUrl: string) => ({
    width: 20,
    height: 20,
    background: `url("${imageUrl}") center / contain no-repeat`,
    flexShrink: 0,
  }),
  jobContaiener: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  reviewText: {
    fontSize: 14,
    margin: 0,
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
  justifyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 15,
    margin: '10px 0',
    color: '#6C6C6C',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  vacanciesText: {
    fontSize: 18,
    margin: ' 0 0 12px 0',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 5
  }
})