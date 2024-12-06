import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@components/Button'
import { Input } from '@/components/Input'
import { supabase } from '@/services/supabaseClient'
interface ModalProps {
  showModal: boolean
  streak: number
  onClick?: () => void
}

export const Modal = ({ showModal, streak, onClick }: ModalProps) => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (name.trim().length === 0 || name.length > 20) {
      setError('Value must be between 1 and 20 characters')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const { error, data } = await supabase
        .from('highscores')
        .insert({ name: name.trim(), highscore: streak })
        .select()

      if (error) {
        throw new Error('Something went wrong. Please try again')
      }

      setIsSubmitted(true)
      setName('')
      localStorage.setItem('score_id', data && data[0].id)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePlayAgain = () => {
    setIsSubmitted(false)
    if (onClick) {
      setError('')
      setName('')
      onClick()
    }
  }

  if (!showModal) return null
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto mb-[9rem] mx-auto min-w-[22rem] max-w-2xl">
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-main text-text">
            <>
              <div className="flex items-center justify-center flex-col p-5">
                <h3 className="text-3xl font-semibold">Game over</h3>
                <h3 className="text-2xl mt-3">
                  Streak: <span className="text-secondary">{streak}</span>
                </h3>
              </div>

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
                    <Input
                      label="Scoreboard name"
                      name="name"
                      value={name}
                      placeholder="Morten"
                      error={error}
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />
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
                  <Button text="Front page" variant="secondary" link="/" />
                  <Button text="Play again" onClick={handlePlayAgain} />
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-logoColor opacity-50"></div>
    </>
  )
}
