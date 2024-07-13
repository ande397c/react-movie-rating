import { useState } from 'react'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { getRandomArrayElements } from '../../utils/getRandomArrayElements'
import { getHighestRating } from '../../utils/getHighestRating'
import { Movie } from '@/types/movie'
import { moviesData } from '../../data/moviesData'

export const Game = () => {
  const [movies, setMovies] = useState<Movie[]>(
    getRandomArrayElements({ array: moviesData, num: 2 })
  )
  const [points, setPoints] = useState<number>(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = (movie: Movie, index: number) => {
    setSelected(index)
    setClicked(true)
    const highestRating = getHighestRating({ array: movies })

    if (highestRating === movie.vote_average) {
      if (clicked) {
        return
      }
      setPoints((prevPoints) => prevPoints + 1)
    } else {
      alert('game lost')
    }
  }

  const replaceMovies = () => {
    if (clicked) {
      setClicked(false)
      setSelected(null)
      setMovies(getRandomArrayElements({ array: moviesData, num: 2 }))
    }
  }

  return (
    <>
      <header className="p-4 px-12 text-text flex justify-between text-lg fixed w-full">
        <h2 className="text-2xl">Category:</h2>
        <h2 className="text-2xl">
          Streak: <span className="text-secondary">{points}</span>
        </h2>
      </header>
      <div className="h-screen w-full flex justify-center items-center flex-col text-text">
        <h3 className="text-2xl mb-12">Which movie has the highest rating?</h3>
        <div className="flex gap-4 items-center h-[23rem]">
          <h4 className="text-2xl mb-12">OR</h4>
          {movies.map((movie, index) => (
            <Card
              key={movie.id}
              clicked={clicked}
              isSelected={index === selected}
              img={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              title={movie.title}
              score={movie.vote_average}
              onClick={() => handleClick(movie, index)}
            />
          ))}
        </div>
        <Button
          text="Generate new pair"
          isDisabled={!clicked}
          onClick={replaceMovies}
        />
        {/* <h3 className="mt-4">Correct</h3> */}
      </div>
    </>
  )
}