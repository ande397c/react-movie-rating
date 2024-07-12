import { moviesData } from '../../data/moviesData'
import { Card } from '../../components/Card'
import { getRandomArrayElements } from '../../utils/getRandomArrayElements'
import { useState } from 'react'

export const Game = () => {
  const [movies, setMovies] = useState(
    getRandomArrayElements({ array: moviesData, num: 2 })
  )
  const [points, setPoints] = useState<number>(0)

  const handleClick = () => {
    console.log('handleClick')
  }

  const replaceMovies = () => {
    setMovies(getRandomArrayElements({ array: moviesData, num: 2 }))
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
        <h3 className="text-2xl mb-16">Which movie has the highest rating?</h3>
        <div className="flex gap-8 items-center h-[25rem]">
          <h4 className="text-2xl mb-12">OR</h4>
          {movies.map((movie) => (
            <Card
              key={movie.id}
              img={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              title={movie.title}
              score={movie.vote_average}
              onClick={handleClick}
            />
          ))}
        </div>
        <button
          className="bg-button rounded-xl border-none h-10 text-center mt-8 transition-all duration-150 hover:bg-hover w-40"
          onClick={replaceMovies}
        >
          New pair
        </button>
      </div>
    </>
  )
}
