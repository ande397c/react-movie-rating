import { MovieCard } from '@/features/game/components/MovieCard'
import { TMovie } from '@/features/game/types/movie'

interface MoviesListProps {
  movies: TMovie[] | undefined
  selectedMovie: number | null
  handleClick: (movie: TMovie, index: number) => void
}

export const MoviesList = ({
  movies,
  selectedMovie,
  handleClick
}: MoviesListProps) => {
  return (
    <div className="flex items-center h-[24rem] sm:h-[28rem] mt-5 gap-4">
      <h4 className="text-lg sm:text-2xl mb-12">OR</h4>
      {movies?.map((movie, index) => (
        <MovieCard
          key={movie.id}
          clicked={selectedMovie !== null}
          isSelected={index === selectedMovie}
          movie={movie}
          onClick={() => handleClick(movie, index)}
        />
      ))}
    </div>
  )
}
