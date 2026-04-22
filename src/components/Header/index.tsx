import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button'
import { Progressbar } from '../Progressbar/Progressbar'

interface HeaderProps {
  running: boolean
  streak: number
  progressKey?: number
  onTimeEnd: () => void
}

export const Header = ({
  running,
  streak,
  progressKey,
  onTimeEnd
}: HeaderProps) => {
  return (
    <>
      <Progressbar
        key={progressKey}
        running={running}
        onEnd={onTimeEnd}
        duration={6000}
      />
      <header className="p-4 sm:px-12 px-4 text-text flex justify-between items-center text-lg fixed w-full">
        {/* <h2 className="text-2xl">Category:</h2> */}
        <Button
          text="Go back"
          width="fit"
          icon={faArrowLeft}
          className="px-4"
          link="/"
        />

        <h2 className="text-2xl">
          Streak: <span className="text-secondary">{streak}</span>
        </h2>
      </header>
    </>
  )
}
