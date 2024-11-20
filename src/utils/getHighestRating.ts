import { TMovie } from '@/types/movie'

interface GetHighestRatingProps {
  array: TMovie[]
}

export const getHighestRating = ({ array }: GetHighestRatingProps) => {
  const ratings = array.map((movie) => {
    return movie.rating
  })
  const highestRating = Math.max(...ratings)
  return highestRating
}
