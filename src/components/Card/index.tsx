import { useState } from 'react'
import clsx from 'clsx'
import { getQualityPoster } from '@utils/getQualityPoster'
import MoviePoster from '../../../assets/movie_poster.png'

interface CardProps {
  img: string
  title: string
  rating: number
  clicked: boolean
  isSelected: boolean
  onClick: () => void
}

export const Card = ({
  img,
  title,
  rating,
  clicked,
  isSelected,
  onClick
}: CardProps) => {
  const [fallbackImg, setFallbackImg] = useState(false)
  return (
    <div
      className={clsx(
        'el-container group flex justify-center flex-col items-center transition-all duration-150 hover:scale-110 cursor-pointer',
        { 'scale-105 sm:scale-125': isSelected, 'pointer-events-none': clicked }
      )}
      onClick={onClick}
    >
      <div className="w-[120px] sm:w-[160px] h-full">
        <img
          src={fallbackImg ? MoviePoster : getQualityPoster(img)}
          className="rounded-sm max-w-full max-h-full"
          onError={() => {
            setFallbackImg(true)
          }}
        />
      </div>
      <div className="text-center pt-4 text-xl overflow-hidden max-w-[100px] sm:w-[260px] sm:max-w-xs sm:h-fit">
        <h3 className="truncate overflow-visible whitespace-normal sm:group-hover:overflow-visible text-clip sm:group-hover:whitespace-normal sm:group-hover:text-clip text-base sm:text-lg line-clamp-2">
          {title}
        </h3>
      </div>
      <div className="mt-4 text-secondary text-base sm:text-[1.3rem] text-center">
        <p
          className={clsx({
            visible: clicked,
            invisible: !clicked
          })}
        >
          {clicked ? rating : 'Nice try'}
        </p>
      </div>
    </div>
  )
}
