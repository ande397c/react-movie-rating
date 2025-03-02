import { useEffect, useState } from 'react'
import { MovieCard } from '@/components/MovieCard'
import { Button } from '@components/Button'
import { GameOverModal } from '@/components/GameOverModal'
import { ShortcutsModal } from '@/components/ShortcutsModal'
import { Header } from '@/components/Header'
import { randomizeArray } from '@/utils/randomizeArray'
import { getHighestRating } from '@utils/getHighestRating'
import { detectDevice } from '@/utils/detectDevice'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut'
import { TMovie } from '@/types/movie'
import { TModalTypes } from '@/types/modalTypes'
import { moviesData } from '@data/moviesData'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

export const Game = () => {
  const [movies, setMovies] = useState<TMovie[] | undefined>(undefined)
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null)
  const [points, setPoints] = useState(0)
  const [modalControl, setModalControl] = useState<TModalTypes>(null)

  const showGameOverModal = modalControl === 'gameOver'
  const showShortcutsModal = modalControl === 'shortcuts'

  useKeyboardShortcut({
    keys: ['Space', 'Enter'],
    isEnabled: !showGameOverModal,
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

  const handleClick = (movie: TMovie, index: number) => {
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
    replaceMovies()
  }

  const replaceMovies = () => {
    // Prevent user from cycling trough movies during game
    if (selectedMovie === null && points > 0) return

    setMovies(randomizeArray(moviesData))
    setSelectedMovie(null)
  }

  return (
    <>
      <Header streak={points} />
      <div className="h-screen w-full flex justify-center items-center flex-col text-text">
        <h3 className="text-2xl sm:text-3xl text-center mt-8 sm:mt-0">
          Which movie has the highest rating?
        </h3>
        <div className="flex items-center h-[24rem] sm:h-[28rem] mt-5 gap-4 sm:gap-0">
          <h4 className="text-lg sm:text-2xl mb-12">OR</h4>
          {movies?.map((movie, index) => (
            <MovieCard
              key={movie.id}
              clicked={selectedMovie !== null}
              isSelected={index === selectedMovie}
              movie={movie}
              onClick={() => handleClick(movie, index)}
            />
          ))}
        </div>
        <Button
          text="New pair"
          isDisabled={selectedMovie == null}
          onClick={replaceMovies}
          width="fit"
          className="px-20 text-xl sm:px-4 sm:text-base"
        />
        {detectDevice() === 'PC' && (
          <Button
            className="fixed bottom-6 right-6"
            width="fit"
            icon={faQuestion}
            onClick={() => setModalControl('shortcuts')}
          />
        )}
      </div>
      <ShortcutsModal showModal={showShortcutsModal} onClose={closeModal} />
      <GameOverModal
        showModal={showGameOverModal}
        streak={points}
        onClick={resetGame}
      />
    </>
  )
}
