import { useState } from 'react'
import { MovieCard } from '@/components/MovieCard'
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'
import { Header } from '@/components/Header'
import { getRandomArrayElements } from '@utils/getRandomArrayElements'
import { getHighestRating } from '@utils/getHighestRating'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut'
import { TMovie } from '@/types/movie'
import { moviesData } from '@data/moviesData'

export const Game = () => {
  const [movies, setMovies] = useState<TMovie[]>(
    getRandomArrayElements(moviesData, 2)
  )
  const [points, setPoints] = useState<number>(0)
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null)
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  useKeyboardShortcut({
    keys: ['Space', 'Enter'],
    isEnabled: !showModal,
    onKeyPressed: () => {
      replaceMovies()
    }
  })

  const handleClick = (movie: TMovie, index: number) => {
    setSelectedMovie(index)
    setIsClicked(true)
    const highestRating = getHighestRating({ array: movies })

    if (highestRating === movie.rating) {
      if (isClicked) {
        return
      }
      setPoints((prevPoints) => prevPoints + 1)
    } else {
      setShowModal(true)
    }
  }

  const resetGame = () => {
    setShowModal(false)
    setPoints(0)
    replaceMovies()
  }

  const replaceMovies = () => {
    if (!isClicked) return

    setIsClicked(false)
    setSelectedMovie(null)

    let randomMovies: TMovie[] = []
    let wrongMovieValues = true

    while (wrongMovieValues) {
      randomMovies = getRandomArrayElements(moviesData, 2)
      wrongMovieValues =
        randomMovies[0].rating === randomMovies[1].rating ||
        Math.abs(randomMovies[0].rating - randomMovies[1].rating) < 0.3
    }

    setMovies(randomMovies)
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
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              clicked={isClicked}
              isSelected={index === selectedMovie}
              movie={movie}
              onClick={() => handleClick(movie, index)}
            />
          ))}
        </div>
        <Button
          text="New pair"
          isDisabled={!isClicked}
          onClick={replaceMovies}
          width="fit"
          className="px-20 text-xl sm:px-4 sm:text-base"
        />
      </div>
      <Modal showModal={showModal} streak={points} onClick={resetGame} />
    </>
  )
}
