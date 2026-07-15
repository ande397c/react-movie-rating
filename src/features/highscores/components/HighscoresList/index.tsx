import { Score } from '@/features/highscores/components/Score'
import { getStorageId } from '@/features/highscores/utils/getStorageId'
import { THighscore } from '@/features/highscores/types/highscore'

interface HighscoreListProps {
  highscores: THighscore[] | null
}

export const HighscoreList = ({ highscores }: HighscoreListProps) => {
  return (
    <>
      {highscores?.map((highscore, index) => (
        <Score
          key={highscore.id}
          pos={index + 1}
          name={highscore.name}
          streak={highscore.highscore}
          isOwnScore={getStorageId() === highscore.id}
        />
      ))}
    </>
  )
}
