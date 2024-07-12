interface CardProps {
  img: string
  title: string
  score: number
  onClick: () => void
}

export const Card = ({ img, title, score, onClick }: CardProps) => {
  return (
    <div
      className="el-container group flex justify-center flex-col items-center transition-all duration-150 hover:scale-110 cursor-pointer"
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
        <p className="text-secondary">{score}</p>
      </div>
    </div>
  )
}

// <div className="text-center hover:scale-110 transition-all duration-150 flex flex-col items-center">
//   <img src={img} alt="" className="rounded-sm" />
//   <h4 className="py-3 truncate-title">{title}</h4>
//   <h4>{score}</h4>
// </div>
