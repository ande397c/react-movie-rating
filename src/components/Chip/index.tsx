import clsx from 'clsx'

interface ChipProps {
  text: string
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  variant?: 'primary'
  className?: string
}

export const Chip = ({
  text,
  rounded = 'md',
  variant = 'primary',
  className
}: ChipProps) => {
  const primaryClasses =
    'bg-text text-button p-2 px-2 mx-2 text-sm font-semibold'
  const classes = clsx(className, {
    [primaryClasses]: variant === 'primary',
    'rounded-sm': rounded === 'sm',
    'rounded-md': rounded === 'md',
    'rounded-lg': rounded === 'lg',
    'rounded-full': rounded === 'full'
  })

  return <span className={classes}>{text}</span>
}
