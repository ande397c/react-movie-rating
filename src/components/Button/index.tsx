import clsx from 'clsx'
import { SpinnerIcon } from '../icons/SpinnerIcon'

interface ButtonProps {
  text: string
  isDisabled?: boolean
  isLoading?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export const Button = ({
  text,
  isDisabled,
  isLoading,
  type,
  onClick
}: ButtonProps) => {
  const disabledClasses = 'opacity-60 pointer-events-none'
  return (
    <button
      className={clsx({
        'bg-button text-text rounded-lg border-none h-10 text-center transition-all duration-150 hover:bg-hover w-40':
          true,
        [disabledClasses]: isDisabled || isLoading
      })}
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? <SpinnerIcon /> : text}
    </button>
  )
}
