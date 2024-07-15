import { Movie } from '../types/movie'

interface GetHighestRatingProps {
  array: Movie[]
}

export const getHighestRating = ({ array }: GetHighestRatingProps) => {
  const ratings = array.map((movie) => {
    return movie.rating
  })
  const highestRating = Math.max(...ratings)
  return highestRating
}
