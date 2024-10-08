import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@components/Button'
import { supabase } from '../../services/supabaseClient'
import clsx from 'clsx'
interface ModalProps {
  showModal: boolean
  streak: number
  onClick?: () => void
}

export const Modal = ({ showModal, streak, onClick }: ModalProps) => {
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    setIsLoading(true)
    e.preventDefault()

    if (name.length == 0 || name.length > 20) {
      setError('Name must be between 1 and 20 characters')
      setIsLoading(false)
      return
    }

    const { error } = await supabase
      .from('highscores')
      .insert({ name: name, highscore: streak })
    // const timestamp = Date.now()
    // localStorage.setItem('timestamp', JSON.stringify(timestamp))

    if (error) {
      setError('Something went wrong. Please try again')
      setIsLoading(false)
    } else {
      setIsLoading(false)
      setIsSubmitted(true)
    }
  }

  const handlePlayAgain = () => {
    setIsSubmitted(false)
    if (onClick) {
      onClick()
    }
  }
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mb-[9rem] mx-auto min-w-[22rem] max-w-2xl">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-main text-text">
                {/*header*/}
                <div className="flex items-center justify-center flex-col p-5">
                  <h3 className="text-3xl font-semibold">Game over</h3>
                  <h3 className="text-2xl mt-3">
                    Streak: <span className="text-secondary">{streak}</span>
                  </h3>
                </div>

                {/*body*/}
                <div className="px-6 mb-6">
                  {isSubmitted && showModal ? (
                    <div className="text-center">
                      <h4 className="my-4 text-lg">
                        Thanks for submitting your streak
                      </h4>
                      <Link to="/highscores">
                        <p className="text-secondary underline">
                          Check out the highscores
                        </p>
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h4 className="mb-2 text-lg">
                        Want to register your score?
                      </h4>
                      <label className="block" htmlFor="name">
                        Scoreboard name
                      </label>
                      <input
                        className={clsx('w-full h-8 rounded-md', {
                          'text-logoColor': !error,
                          'border-1 border-danger text-danger': error
                        })}
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                      />
                      {error && (
                        <span className="text-danger text-sm">{error}</span>
                      )}
                      <Button
                        text="Submit"
                        type="submit"
                        isDisabled={name.length == 0 || name.length > 20}
                        isLoading={isLoading}
                        className="mt-2"
                        width="fit"
                      />
                    </form>
                  )}
                  <div className="flex flex-col sm:flex-row gap-2 mt-6">
                    <Link to="/" className="w-full">
                      <Button text="Front page" variant="secondary" />
                    </Link>
                    <Button text="Play again" onClick={handlePlayAgain} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-logoColor opacity-50"></div>
        </>
      )}
    </>
  )
}
