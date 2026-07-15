import { supabase } from '@/lib/supabase'
import { THighscore } from '@/features/highscores/types/highscore'

export const addHighscore = async (
  name: string,
  streak: number
): Promise<THighscore> => {
  const { data, error } = await supabase
    .from('highscores')
    .insert({ name: name.trim(), highscore: streak })
    .select()

  if (error || !data) {
    throw new Error('Something went wrong. Please try again')
  }

  return data[0]
}
