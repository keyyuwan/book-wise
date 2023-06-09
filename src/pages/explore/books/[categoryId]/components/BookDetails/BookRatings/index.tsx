import { useState } from 'react'
import { useSession } from 'next-auth/react'

import { Avatar } from '@/components/Avatar'
import { RatingStars } from '@/components/RatingStars'
import { BookRatingForm } from './BookRatingForm'
import { RatingButton } from './RatingButton'
import {
  BookRating,
  BookRatingUser,
  BookRatingsContainer,
  BookRatingsHeader,
  BookRatingsWrapper,
} from './styles'

interface Rating {
  id: string
  rate: number
  createdAt: string
  description: string
  user: {
    id: string
    name: string
    avatarUrl: string
  }
}

interface BookRatingsProps {
  ratings: Rating[]
  bookId: string
}

export function BookRatings({ ratings, bookId }: BookRatingsProps) {
  const { data: session } = useSession()

  const [hasRatingForm, setHasRatingForm] = useState(false)

  function handleShowRatingForm() {
    setHasRatingForm(true)
  }

  function handleHideRatingForm() {
    setHasRatingForm(false)
  }

  const userAlreadyRated = ratings.some(
    (rating) => rating.user.id === session?.user.id,
  )

  return (
    <BookRatingsContainer>
      <BookRatingsHeader>
        <span>Avaliações</span>

        {!hasRatingForm && !userAlreadyRated && (
          <RatingButton onShowRatingForm={handleShowRatingForm} />
        )}
      </BookRatingsHeader>

      <BookRatingsWrapper>
        {hasRatingForm && (
          <BookRatingForm onClose={handleHideRatingForm} bookId={bookId} />
        )}

        {ratings.map((rating) => {
          return (
            <BookRating
              key={rating.id}
              isLight={rating.user.id === session?.user.id}
            >
              <div>
                <BookRatingUser>
                  <Avatar
                    src={rating.user.avatarUrl}
                    alt={rating.user.name}
                    size="medium"
                  />

                  <div>
                    <strong>{rating.user.name}</strong>
                    <span>{rating.createdAt}</span>
                  </div>
                </BookRatingUser>

                <RatingStars value={rating.rate} readOnly />
              </div>

              <p>{rating.description}</p>
            </BookRating>
          )
        })}
      </BookRatingsWrapper>
    </BookRatingsContainer>
  )
}
