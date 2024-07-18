import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@components/Button'

const App = (): ReactElement => {
  return (
    <div className="h-screen w-full flex justify-center items-start">
      <div className="flex flex-col p-4">
        <article className="mt-12 text-center text-text">
          <h1 className="text-4xl leading-[3rem]">
            Welcome to the
            <span className="p-1 mx-2 bg-logoBg text-logoColor font-semibold rounded-lg">
              movie
            </span>
            rating game
          </h1>
          <h2 className="font-semibold mt-7 text-secondary text-xl">
            About the game:
          </h2>
        </article>
        <section className="text-text my-auto max-w-prose">
          <p className="leading-7 text-lg my-4 mb-6 max-w-prose">
            Your goal is to guess the movie with the highest rating. Each
            correct guess counts towards your streak - a failed guess ends the
            game.
          </p>

          <article className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/highscores" className="w-full">
              <Button text="View highscores" variant="secondary" />
            </Link>
            <Link to="/game" className="w-full">
              <Button text="Play" />
            </Link>
          </article>
        </section>
      </div>
    </div>
  )
}

export default App
