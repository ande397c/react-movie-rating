import clsx from 'clsx'

interface CardProps {
  img: string
  title: string
  score: number
  clicked: boolean
  isSelected: boolean
  onClick: () => void
}

export const Card = ({
  img,
  title,
  score,
  clicked,
  isSelected,
  onClick
}: CardProps) => {
  return (
    <div
      className={clsx(
        'el-container group flex justify-center flex-col items-center transition-all duration-150 hover:scale-110 cursor-pointer',
        { 'scale-125': isSelected, 'pointer-events-none': clicked }
      )}
      onClick={onClick}
    >
      <div className="w-[160px] h-full">
        <img src={img} className="rounded-sm max-w-full max-h-full" />
      </div>
      <div className="text-center pt-4 text-xl overflow-hidden w-[260px]">
        <h3 className="truncate group-hover:overflow-visible group-hover:whitespace-normal group-hover:text-clip">
          {title}
        </h3>
      </div>
      <div className="mt-2 text-[1.3rem] text-center">
        <p
          className={clsx('text-secondary', {
            visible: clicked,
            invisible: !clicked
          })}
        >
          {clicked ? score : 'Nice try'}
        </p>
      </div>
    </div>
  )
}
