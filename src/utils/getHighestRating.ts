import { TMovie } from '@/types/movie'

export const getHighestRating = (array: TMovie[]) => {
  const ratings = array.map((movie) => {
    return movie.rating
  })
  const highestRating = Math.max(...ratings)
  return highestRating
}
