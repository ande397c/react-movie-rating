import { Button } from '../Button'

interface HeaderProps {
  streak: number
}

export const Header = ({ streak }: HeaderProps) => {
  return (
    <header className="p-4 sm:px-12 px-4 text-text flex justify-between items-center text-lg fixed w-full">
      {/* <h2 className="text-2xl">Category:</h2> */}
      <Button
        text="Go back"
        width="fit"
        icon="BackIcon"
        className="px-4"
        link="/"
      />
      <h2 className="text-2xl">
        Streak: <span className="text-secondary">{streak}</span>
      </h2>
    </header>
  )
}
