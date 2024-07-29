import clsx from 'clsx'
import { SpinnerIcon } from '@components/icons/SpinnerIcon'
import { BackIcon } from '@components/icons/BackIcon'

interface ButtonProps {
  text: string
  isDisabled?: boolean
  isLoading?: boolean
  type?: 'button' | 'submit' | 'reset'
  width?: 'full' | '1/2' | 'fit'
  variant?: 'primary' | 'secondary'
  className?: string
  icon?: string
  onClick?: () => void
}

export const Button = ({
  text,
  isDisabled,
  isLoading,
  type,
  width = 'full',
  variant = 'primary',
  className,
  icon,
  onClick
}: ButtonProps) => {
  const defaultClasses =
    'rounded-lg h-9 text-text text-center flex justify-center items-center gap-2 transition-all duration-150'
  const primaryClasses = 'bg-button hover:bg-hover border-none'
  const secondaryClasses = 'bg-main border border-button'
  const disabledClasses = 'opacity-60 pointer-events-none'
  return (
    <button
      className={clsx(defaultClasses, className, {
        [primaryClasses]: variant === 'primary',
        [secondaryClasses]: variant === 'secondary',
        'w-full': width === 'full',
        'w-1/2': width === '1/2',
        'w-fit px-4': width === 'fit',
        [disabledClasses]: isDisabled || isLoading
      })}
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {icon === 'BackIcon' && <BackIcon />}
      {isLoading ? <SpinnerIcon /> : text}
    </button>
  )
}
