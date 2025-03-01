import { useEffect } from 'react'

interface UseOutsideClickProps {
  ref: React.RefObject<HTMLElement>
  callback: () => void
}

export const useOutsideClick = ({ ref, callback }: UseOutsideClickProps) => {
  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}
