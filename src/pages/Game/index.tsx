import { useState } from 'react'
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
      <header className="p-4 px-12 text-text flex justify-between text-lg fixed w-full">
        {/* <h2 className="text-2xl">Category:</h2> */}
        <Link to="/">
          <Button text="Go back" />
        </Link>
        <h2 className="text-2xl">
          Streak: <span className="text-secondary">{points}</span>
        </h2>
      </header>
      <div className="h-screen w-full flex justify-center items-center flex-col text-text">
        <h3 className="text-2xl text-center">
          Which movie has the highest rating?
        </h3>
        <div className="flex items-center h-[28rem] mt-5">
          <h4 className="text-2xl mb-12">OR</h4>
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
          text="Generate new pair"
          isDisabled={!clicked}
          onClick={replaceMovies}
        />
      </div>
      <Modal showModal={showModal} streak={points} onClick={reset} />
    </>
  )
}
