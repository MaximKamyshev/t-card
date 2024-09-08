import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  logo: (imageUrl: string, size: number) => ({
    display: 'inline-block',
    width: imageUrl ? `${size ? size : 20}px` : null,
    height: imageUrl ? `${size ? size : 20}px` : null,
    background: `url("${imageUrl}") center / contain no-repeat`,
    border: 'none',
    flexShrink: 0,
    outline: 'none',
  }),
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: 500,
    margin: 0,
    padding: '0 25px',
  },
  bottomSheetSubscription: {
    fontSize: 16,
    fontWeight: 300,
    color: '#7A7A7A',
    margin: '17px  0 13px 0',
    padding: '0 25px',
  },
  buttonSheetContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    height: 72,
    margin: '0 16px 8px 16px',
    border: '1px solid #f2f2f4',
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  buttonSheetBoldText: {
    fontSize: 13,
    fontWeight: 600,
  },
  iosWrapper: {
    padding: '0 0 34px 0',
  }
})