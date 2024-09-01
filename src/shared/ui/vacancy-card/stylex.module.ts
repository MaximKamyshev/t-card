import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  card: {
    padding: '20px 15px 23px 15px',
    borderRadius: 12,
    boxShadow: '0 6px 16px 0 #f2f1f4',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #f2f1f4',
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
  },
  logo: (imageUrl: string) => ({
    width: 45,
    height: 45,
    borderRadius: 12,
    background: `url("${imageUrl}") center / contain no-repeat`,
    marginRight: 12,
  }),
  flexContainerJustifyBetween: {
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexContainer: {
    display: 'flex',
  },
  flexInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 500,
    margin: 0,
  },
  companyName: {
    fontSize: 14,
    margin: '6px 0 0 0',
  },
  tag: {
    fontSize: 12,
    padding: '8px 17.5px',
    borderRadius: 6,
    border: '1px solid #f2f1f4',
    display: 'inline-block',
    margin: 0,
  },
  companyContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  tagsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    padding: '10px 15px',
    margin: '7px 0 0 0'
  },
  city: {
    fontSize: 14,
    fontWeight: 300,
    color: '#00A77F',
    margin: 0,
  },
  pin: (imageUrl: string) => ({
    width: 24,
    height: 24,
    background: `url("${imageUrl}") center / contain no-repeat`,
  }),
  salary: {
    fontSize: 16,
    color: '#00A77F',
    margin: 0,
  },
  salaryPrice: {
    color: 'black',
    fontWeight: 500,
    margin: 0,
  },
  flexBetweenContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 19,
  },
  createTime: {
    fontSize: 10,
    margin: 0,
  },
  confirmLogo: (imageUrl: string) => ({
    width: 12,
    height: 16,
    background: `url("${imageUrl}") center / contain no-repeat`,
    margin: '7px 0 0 0',
  }),
  bookmarkContainer: {
    display: 'flex',
    gap: 10,
  }
})