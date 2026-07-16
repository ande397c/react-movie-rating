import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { HighscoreList } from '@/features/highscores/components/HighscoresList'
import { SpinnerIcon } from '@/components/ui/icons/SpinnerIcon'
import { getHighscores } from '@/features/highscores/api/getHighscores'
import { THighscore } from '@/features/highscores/types/highscore'
import clsx from 'clsx'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { paths } from '@/config/paths'

export const Highscores = () => {
  const [highscores, setHighscores] = useState<THighscore[] | null>(null)
  const [errorOccurred, setErrorOccurred] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadHighscores()
  }, [])

  async function loadHighscores() {
    setIsLoading(true)
    const { data, error } = await getHighscores()
    setHighscores(data)
    setIsLoading(false)
    if (error) {
      setErrorOccurred(true)
    }
  }

  return (
    <div className="h-screen w-full flex justify-start items-center flex-col p-8">
      <h1 className="text-4xl text-text font-semibold">Highscores</h1>
      <div className="py-4 flex justify-center">
        <Link to={paths.landing}>
          <Button text="Go back" width="fit" icon={faArrowLeft} />
        </Link>
      </div>
      <div className="min-w-96 sm:min-w-[500px] lg:min-w-[700px] bg-complementary rounded-xl">
        <div className="w-full uppercase flex justify-around text-text p-4 pb-2 text-xl font-semibold">
          <h3 className="w-1/3 text-center">Pos</h3>
          <h3 className="w-1/3 text-center">Name</h3>
          <h3 className="w-1/3 text-center">Score</h3>
        </div>
        <div className="h-[550px] sm:h-[700px] overflow-y-auto">
          <div
            className={clsx({
              'flex space-y-2': true,
              'flex-col': !isLoading,
              'justify-center items-baseline': isLoading
            })}
          >
            {isLoading && <SpinnerIcon size="lg" className="mt-6" />}
            {errorOccurred && !isLoading && (
              <h3 className="text-text text-center text-lg">
                Error occurred while fetching data
              </h3>
            )}
            <HighscoreList highscores={highscores && highscores} />
          </div>
        </div>
      </div>
    </div>
  )
}
