import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabaseClient'
import { Highscore } from '../../types/highscore'

export const Highscores = () => {
  const [highscores, setHighscores] = useState<Highscore[] | null>()

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
      <h1 className="text-4xl text-text font-semibold mb-4">Highscores</h1>
      <div className="w-96 bg-hover">
        {highscores?.map((highscore, index) => (
          <div className="flex justify-between">
            <p>{index + 1}</p>
            <p>{highscore.name}</p>
            <p>{highscore.highscore}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
