import clsx from 'clsx'

interface ButtonProps {
  text: string
  isDisabled: boolean
  onClick: () => void
}

export const Button = ({ text, isDisabled, onClick }: ButtonProps) => {
  const disabledClasses = 'opacity-60 pointer-events-none'
  return (
    <button
      className={clsx({
        'bg-button rounded-xl border-none h-10 text-center mt-8 transition-all duration-150 hover:bg-hover w-40':
          true,
        [disabledClasses]: isDisabled
      })}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
