import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Score } from '@components/Score'
import { Button } from '@components/Button'
import { SpinnerIcon } from '@components/icons/SpinnerIcon'
import { getStorageId } from '@utils/getStorageId'
import { supabase } from '../../services/supabaseClient'
import { THighscore } from '../../types/highscore'
import clsx from 'clsx'

export const Highscores = () => {
  const [highscores, setHighscores] = useState<THighscore[] | null>(null)
  const [errorOccurred, setErrorOccurred] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getHighscores()
  }, [])

  async function getHighscores() {
    setIsLoading(true)
    const { data, error } = await supabase
      .from('highscores')
      .select()
      .order('highscore', { ascending: false })
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
        <Link to="/">
          <Button text="Go back" width="fit" icon="BackIcon" />
        </Link>
      </div>
      <div className="w-96 bg-complementary rounded-xl">
        <div className="w-full uppercase flex justify-around text-text p-4 pb-2 text-xl">
          <h3 className="w-1/6 text-center">Pos</h3>
          <h3 className="w-2/6 text-center">Name</h3>
          <h3 className="w-1/3 text-center">Score</h3>
        </div>
        <div className="h-[550px] overflow-y-auto">
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
            {highscores?.map((highscore, index) => (
              <Score
                key={highscore.id}
                pos={index + 1}
                name={highscore.name}
                streak={highscore.highscore}
                isOwnScore={getStorageId() === highscore.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
