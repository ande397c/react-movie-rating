import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { SpinnerIcon } from '@components/icons/SpinnerIcon'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ButtonProps {
  text?: string
  isDisabled?: boolean
  isLoading?: boolean
  icon?: IconDefinition
  type?: 'button' | 'submit' | 'reset'
  width?: 'full' | '1/2' | 'fit'
  variant?: 'primary' | 'secondary'
  className?: string
  link?: string
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
  link,
  onClick
}: ButtonProps) => {
  const defaultClasses =
    'rounded-lg h-9 text-text text-center flex justify-center items-center gap-2 transition-all duration-150'

  const primaryClasses = 'bg-button hover:bg-hover border-none'

  const secondaryClasses = 'bg-main border border-button'

  const disabledClasses = 'opacity-60 pointer-events-none'

  const classes = clsx(defaultClasses, className, {
    [primaryClasses]: variant === 'primary',
    [secondaryClasses]: variant === 'secondary',
    'w-full': width === 'full',
    'w-1/2': width === '1/2',
    'w-fit px-4': width === 'fit',
    [disabledClasses]: isDisabled || isLoading
  })

  const Icon = icon && <FontAwesomeIcon icon={icon} />

  return link ? (
    <Link to={link} className={classes}>
      {Icon}
      {text}
    </Link>
  ) : (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {Icon}
      {isLoading ? <SpinnerIcon /> : text}
    </button>
  )
}
