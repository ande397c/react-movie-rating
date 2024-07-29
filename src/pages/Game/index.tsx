import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@components/Card'
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'
import { getRandomArrayElements } from '@utils/getRandomArrayElements'
import { getHighestRating } from '@utils/getHighestRating'
import { Movie } from '@/types/movie'
import { moviesData } from '@data/moviesData'

export const Game = () => {
  const [movies, setMovies] = useState<Movie[]>(
    getRandomArrayElements({ array: moviesData, num: 2 })
  )
  const [points, setPoints] = useState<number>(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [clicked, setClicked] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      replaceMovies()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [clicked])

  const handleClick = (movie: Movie, index: number) => {
    setSelected(index)
    setClicked(true)
    const highestRating = getHighestRating({ array: movies })

    if (highestRating === movie.rating) {
      if (clicked) {
        return
      }
      setPoints((prevPoints) => prevPoints + 1)
    } else {
      setShowModal(true)
    }
  }

  const reset = () => {
    setShowModal(false)
    setPoints(0)
    replaceMovies()
  }

  const replaceMovies = () => {
    if (clicked) {
      setClicked(false)
      setSelected(null)
      let randomMovies = getRandomArrayElements({ array: moviesData, num: 2 })
      while (randomMovies[0].rating === randomMovies[1].rating) {
        randomMovies = getRandomArrayElements({ array: moviesData, num: 2 })
      }
      setMovies(randomMovies)
    }
  }

  return (
    <>
      <header className="p-4 sm:px-12 px-4 text-text flex justify-between items-center text-lg fixed w-full">
        {/* <h2 className="text-2xl">Category:</h2> */}
        <Link to="/">
          <Button text="Go back" width="fit" icon="BackIcon" className="px-4" />
        </Link>
        <h2 className="text-2xl">
          Streak: <span className="text-secondary">{points}</span>
        </h2>
      </header>
      <div className="h-screen w-full flex justify-center items-center flex-col text-text">
        <h3 className="text-3xl text-center mt-8 sm:mt-0">
          Which movie has the highest rating?
        </h3>
        <div className="flex items-center h-[24rem] sm:h-[28rem] mt-5 gap-4 sm:gap-0">
          <h4 className="text-lg sm:text-2xl mb-12">OR</h4>
          {movies.map((movie, index) => (
            <Card
              key={movie.id}
              clicked={clicked}
              isSelected={index === selected}
              img={movie.poster_path}
              title={movie.title}
              rating={movie.rating}
              onClick={() => handleClick(movie, index)}
            />
          ))}
        </div>
        <Button
          text="New pair"
          isDisabled={!clicked}
          onClick={replaceMovies}
          width="fit"
          className="px-20 text-xl sm:px-4 sm:text-base"
        />
      </div>
      <Modal showModal={showModal} streak={points} onClick={reset} />
    </>
  )
}
