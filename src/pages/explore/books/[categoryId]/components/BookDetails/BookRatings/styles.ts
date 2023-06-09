import { styled } from '@/styles/stitches.config'

export const BookRatingsContainer = styled('div', {
  marginTop: '$10',
})

export const BookRatingsHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  span: {
    fontSize: '$sm',
    color: '$gray200',
  },
})

export const BookRatingsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

  marginTop: '$4',
})

export const BookRating = styled('div', {
  padding: '$6',
  borderRadius: 8,

  '> div': {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  p: {
    marginTop: '$5',
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',
  },

  variants: {
    isLight: {
      true: {
        backgroundColor: '$gray600',
      },

      false: {
        backgroundColor: '$gray700',
      },
    },
  },

  defaultVariants: {
    isLight: false,
  },
})

export const BookRatingUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  div: {
    display: 'flex',
    flexDirection: 'column',

    strong: {
      lineHeight: '$short',
    },

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})
