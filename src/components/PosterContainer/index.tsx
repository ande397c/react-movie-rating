import { useState } from 'react'
import { getQualityPoster } from '@utils/getQualityPoster'
import MoviePoster from '../../../assets/movie_poster.png'

interface PosterContainerProps {
  posterPath: string
}

export const PosterContainer = ({ posterPath }: PosterContainerProps) => {
  const [fallbackImg, setFallbackImg] = useState(false)
  return (
    <div className="w-[120px] sm:w-[160px] h-full">
      <img
        src={fallbackImg ? MoviePoster : getQualityPoster(posterPath)}
        className="rounded-sm max-w-full max-h-full"
        onError={() => {
          setFallbackImg(true)
        }}
      />
    </div>
  )
}
