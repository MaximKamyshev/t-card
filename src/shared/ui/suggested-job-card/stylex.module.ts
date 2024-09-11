import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  card: (firstColor: string) => ({
    backgroundColor: firstColor,
    padding: '20px 15px',
    borderRadius: 12,
    color: 'white',
    display: 'inline-block',
    boxShadow: '0 6px 16px 0 #AEAEAE',
    flexShrink: 0,
    textDecoration: 'none',
  }),
  bIcon: (secondColor: string, imageUrl: string) => ({
    width: 45,
    height: 45,
    borderRadius: 12,
    background: `${secondColor} url("${imageUrl}") center / contain no-repeat`,
    marginRight: 12,
    boxShadow: '0 2.2px 5.3px 0 #00000040',
  }),
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexCenterContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 500,
    margin: 0,
    maxWidth: 150,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
  },
  companyName: {
    fontSize: 14,
    margin: '6px 0 0 0',
  },
  infoContainer: {
    margin: '0 27px 0 0',
  },
  bookmark: (secondColor: string, imageUrl: string) => ({
    border: 'none',
    maskImage: `url("${imageUrl}")`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    background: `${secondColor}`,
    cursor: 'pointer',
    width: 12,
    height: 16,
    margin: '4px 6px',
    padding: 0,
  }),
  tag: (secondColor: string) => ({
    fontSize: 12,
    padding: '8px 17.5px',
    borderRadius: 6,
    background: `${secondColor}`,
    display: 'inline-block',
    margin: 0,
    textWrap: 'nowrap',
    textAlign: 'center',
  }),
  tagsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 7,
    padding: '10px 0',
    margin: '7px 0 0 0',
  },
  city: (secondColor: string) => ({
    fontSize: 14,
    fontWeight: 300,
    color: `${secondColor}`,
    margin: 0,
  }),
  pin: (secondColor: string, imageUrl: string) => ({
    width: 16,
    height: 20,
    maskImage: `url("${imageUrl}")`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    background: `${secondColor}`,
    margin: '0 2px 0 0'
  }),
  salary: (secondColor: string) => ({
    fontSize: 16,
    color: `${secondColor}`,
    margin: 0,
  }),
  salaryPrice: {
    color: 'white',
    fontWeight: 500
  },
  flexBetweenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexInfoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  jobLogo: (imageUrl: string) => ({
    width: 20,
    height: 20,
    background: `url("${imageUrl}") center / contain no-repeat`,
    flexShrink: 0,
  }),
  jobNameContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  }
})