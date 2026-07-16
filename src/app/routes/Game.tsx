import { useEffect, useState } from 'react'
import { MoviesList } from '@/features/game/components/MoviesList'
import { Button } from '@/components/ui/Button'
import { GameOverModal } from '@/features/game/components/GameOverModal'
import { Header } from '@/features/game/components/Header'
import { randomizeArray } from '@/features/game/utils/randomizeArray'
import { getHighestRating } from '@/features/game/utils/getHighestRating'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut'
import { TMovie } from '@/features/game/types/movie'
import { TModalTypes } from '@/features/game/types/modalTypes'
import { moviesData } from '@/features/game/data/moviesData'

export const Game = () => {
  const [movies, setMovies] = useState<TMovie[] | undefined>(undefined)
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null)
  const [points, setPoints] = useState(0)
  const [modalControl, setModalControl] = useState<TModalTypes>(null)
  const [progressKey, setProgressKey] = useState(0)

  const isRunning = selectedMovie === null
  const showGameOverModal = modalControl === 'gameOver'

  useKeyboardShortcut({
    keys: ['Space', 'Enter'],
    isEnabled: !showGameOverModal && selectedMovie !== null,
    onKeyPressed: () => {
      replaceMovies()
    }
  })

  // Load first pair on mount
  useEffect(() => {
    replaceMovies()
  }, [])

  const closeModal = () => {
    setModalControl(null)
  }

  const reRunProgressBar = () => {
    // Reset timer
    setProgressKey((prevKey) => prevKey + 1)
  }

  const handleMovieClick = (movie: TMovie, index: number) => {
    if (!movies) return

    setSelectedMovie(index)
    const highestRating = getHighestRating(movies)
    if (highestRating === movie.rating) {
      setPoints((prevPoints) => prevPoints + 1)
    } else {
      setModalControl('gameOver')
    }
  }

  const resetGame = () => {
    closeModal()
    setPoints(0)
    reRunProgressBar()
    replaceMovies()
  }

  const replaceMovies = () => {
    // Prevent user from cycling trough movies during game
    if (selectedMovie === null && points > 0) return

    setMovies(randomizeArray(moviesData))
    setSelectedMovie(null)
    reRunProgressBar()
  }

  return (
    <>
      <Header
        streak={points}
        running={isRunning}
        progressKey={progressKey}
        onTimeEnd={() => setModalControl('gameOver')}
      />
      <div className="h-screen w-full flex justify-center items-center flex-col text-text">
        <h3 className="text-2xl sm:text-3xl text-center mt-8 sm:mt-0">
          Which movie has the highest rating?
        </h3>
        <MoviesList
          movies={movies}
          selectedMovie={selectedMovie}
          handleClick={handleMovieClick}
        />
        <Button
          text="New pair"
          isDisabled={selectedMovie == null}
          onClick={replaceMovies}
          width="fit"
          className="px-20 text-xl sm:px-4 sm:text-base"
        />
      </div>
      <GameOverModal
        showModal={showGameOverModal}
        streak={points}
        onClick={resetGame}
      />
    </>
  )
}
