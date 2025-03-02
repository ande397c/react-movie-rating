import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@components/Button'
import { Input } from '@/components/Input'
import { BaseModal } from '@/components/BaseModal'
import { supabase } from '@/services/supabaseClient'

interface GameOverModalProps {
  showModal: boolean
  streak: number
  onClick?: () => void
}

export const GameOverModal = ({
  showModal,
  streak,
  onClick
}: GameOverModalProps) => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const nameNotValid = name.trim().length === 0 || name.length > 20

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (nameNotValid) {
      setError('Name must be between 1 and 20 characters')
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
    <BaseModal showModal={showModal} title="Game over">
      <>
        <h4 className="text-2xl my-3 text-center">
          Streak: <span className="text-secondary">{streak}</span>
        </h4>
        {isSubmitted && showModal ? (
          <div className="text-center">
            <h4 className="my-4 text-lg">Thanks for submitting your streak</h4>
            <Link to="/highscores">
              <p className="text-secondary underline">
                Check out the highscores
              </p>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h4 className="mb-2 text-lg">Want to register your score?</h4>
            <Input
              name="scoreboardName"
              value={name}
              placeholder="Scoreboard name"
              error={error}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <Button
              text="Submit"
              type="submit"
              isDisabled={nameNotValid}
              isLoading={isLoading}
              className="mt-2"
              width="fit"
            />
          </form>
        )}
        <BaseModal.Actions>
          <Button text="Front page" variant="secondary" link="/" />
          <Button text="Play again" onClick={handlePlayAgain} />
        </BaseModal.Actions>
      </>
    </BaseModal>
  )
}
