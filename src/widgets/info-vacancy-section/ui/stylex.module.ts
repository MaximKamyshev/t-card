import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  logo: (imageUrl: string) => ({
    background: `url("${imageUrl}") center / cover no-repeat`,
    width: 80,
    height: 80,
    borderRadius: 11,
    boxShadow: '0 0 5.3px 0 #00000040',
  }),
  vacancy: {
    fontSize: 23,
    fontWeight: 500,
    margin: 0,
  },
  salary: {
    fontSize: 16,
    color: '#00A77F',
    margin: 0,
    fontWeight: 400,
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
    flexWrap: 'nowrap',
    overflow: 'auto',
    padding: '5px 15px',
  },
  tag: {
    fontSize: 12,
    padding: '8px 17.5px',
    borderRadius: 6,
    border: '1px solid #f2f1f4',
    display: 'inline-block',
    margin: 0,
    textWrap: 'nowrap',
  },
  flexInfoContainer: {
    display: 'flex',
    alignItems: 'end',
    gap: 15,
    padding: '22px 15px 5px 15px',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  date: {
    fontSize: 12,
    color: '#5C5C5C',
    margin: 0,
    padding: '5px 15px',
  },
  respondedPeople: {
    fontSize: 12,
    fontWeight: 300,
    color: '#5C5C5C',
    margin: 0
  },
  greenText: {
    color: '#00A77F',
  }
})