import clsx from 'clsx'
import { TMovie } from '@/features/game/types/movie'
import { useState } from 'react'
import { getQualityPoster } from '@/features/game/utils/getQualityPoster'
import MoviePoster from '../../../../../assets/movie_poster.png'

interface MovieCardProps {
  movie: TMovie
  clicked: boolean
  isSelected: boolean
  onClick: () => void
}

export const MovieCard = ({
  movie,
  clicked,
  isSelected,
  onClick
}: MovieCardProps) => {
  return (
    <div
      className={clsx(
        'el-container group flex flex-col items-center justify-start w-[140px] sm:w-[200px] flex-shrink-0 transition-transform duration-150 cursor-pointer',
        {
          'scale-105 sm:scale-110': isSelected,
          'pointer-events-none': clicked
        }
      )}
      onClick={onClick}
    >
      <PosterContainer posterPath={movie.poster_path} />

      <div className="text-center pt-4 text-xl overflow-hidden max-w-[100px] sm:w-[260px] sm:max-w-xs sm:h-fit">
        <h3 className="truncate overflow-visible whitespace-normal sm:group-hover:overflow-visible text-clip sm:group-hover:whitespace-normal sm:group-hover:text-clip text-base sm:text-lg line-clamp-2">
          {movie.title}
        </h3>
        <p className="text-text opacity-80 text-sm">{movie.release_date}</p>
      </div>
      <div className="mt-4 text-secondary text-base sm:text-[1.3rem] text-center">
        <p
          className={clsx({
            visible: clicked,
            invisible: !clicked
          })}
        >
          {clicked ? movie.rating : 'Nice try:)'}
        </p>
      </div>
    </div>
  )
}

interface PosterContainerProps {
  posterPath?: string | null
}

export const PosterContainer = ({ posterPath }: PosterContainerProps) => {
  const [hasError, setHasError] = useState(false)

  const isValidPath = typeof posterPath === 'string' && posterPath.trim() !== ''

  const src =
    !isValidPath || hasError ? MoviePoster : getQualityPoster(posterPath)

  return (
    <div className="w-full aspect-[2/3] overflow-hidden rounded-md bg-gray-200">
      <img
        src={src}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  )
}
