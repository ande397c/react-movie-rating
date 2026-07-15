import { supabase } from '@/lib/supabase'
import { THighscore } from '@/features/highscores/types/highscore'

export const getHighscores = async (): Promise<{
  data: THighscore[] | null
  error: boolean
}> => {
  const { data, error } = await supabase
    .from('highscores')
    .select()
    .order('highscore', { ascending: false })

  return { data, error: Boolean(error) }
}
