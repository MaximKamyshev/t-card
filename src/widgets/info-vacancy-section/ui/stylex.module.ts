import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  logo: (imageUrl: string) => ({
    background: `url("${imageUrl}") center / contain no-repeat`,
    width: 80,
    height: 80,
    borderRadius: 21,
    boxShadow: '0 0 5.3px 0 #00000040',
  }),
  companyName: {
    fontSize: 24,
    fontWeight: 500,
    margin: 0,
    textDecoration: 'underline',
  },
  vacancy: {
    fontSize: 24,
    fontWeight: 500,
    margin: 0,
  },
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
  tagsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 0',
  },
  tag: {
    fontSize: 12,
    padding: '8px 17.5px',
    borderRadius: 6,
    border: '1px solid #f2f1f4',
    display: 'inline-block',
    margin: 0,
  },
  flexInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    margin: '22px 0 0 0',
  },
  flexBetweenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '17px 0 5px 0',
  },
  date: {
    fontSize: 12,
    color: '#5C5C5C',
    margin: '6px 0 0 0'
  }
})