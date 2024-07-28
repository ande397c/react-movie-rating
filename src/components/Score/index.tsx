import clsx from 'clsx'

interface ScoreProps {
  pos: number
  name: string
  streak: number
  isOwnScore?: boolean
}

export const Score = ({ pos, name, streak, isOwnScore }: ScoreProps) => {
  return (
    <div
      className={clsx({
        'text-text flex justify-around text-xl font-semibold bg-white p-2': true
        // 'text-text': !isOwnScore,
        // 'bg-hover text-secondary': isOwnScore
      })}
    >
      <h3 className="w-1/6 text-center">{pos}</h3>
      <h3 className="w-2/6 text-center truncate">{name}</h3>
      <h3 className="w-1/3 text-center">{streak}</h3>
    </div>
  )
}
