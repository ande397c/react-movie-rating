import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Score } from '@components/Score'
import { Button } from '@components/Button'
import { getStorageName } from '@utils/getStorageName'
import { supabase } from '../../services/supabaseClient'
import { Highscore } from '../../types/highscore'

export const Highscores = () => {
  const [highscores, setHighscores] = useState<Highscore[] | null>(null)

  useEffect(() => {
    getHighscores()
  }, [])

  async function getHighscores() {
    const { data } = await supabase
      .from('highscores')
      .select()
      .order('highscore', { ascending: false })
    setHighscores(data)
  }

  return (
    <div className="h-screen w-full flex justify-start items-center flex-col p-8">
      <h1 className="text-4xl text-text font-semibold">Highscores</h1>
      <div className="py-4 flex justify-center">
        <Link to="/">
          <Button text="Go back" />
        </Link>
      </div>
      <div className="w-96 bg-complementary rounded-xl">
        <div className="w-full uppercase flex justify-around text-text p-4 pb-2 text-xl">
          <h3 className="w-1/6 text-center">Pos</h3>
          <h3 className="w-2/6 text-center">Name</h3>
          <h3 className="w-1/3 text-center">Streak</h3>
        </div>
        <div className="h-[550px] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {highscores?.map((highscore, index) => (
              <Score
                key={highscore.id}
                pos={index + 1}
                name={highscore.name}
                streak={highscore.highscore}
                isOwnScore={getStorageName() === highscore.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
