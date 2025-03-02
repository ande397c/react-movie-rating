import { ReactElement } from 'react'
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
            Your goal is to guess the movie with the highest IMDb rating. Each
            correct guess counts towards your streak - a failed guess ends the
            game. Submit your score and compete with other players.
          </p>

          <article className="flex flex-col-reverse sm:flex-row justify-center gap-6">
            <Button text="Highscores" variant="secondary" link="/highscores" />
            <Button text="Play" link="/game" />
          </article>
        </section>
      </div>
    </div>
  )
}

export default App
