import { useEffect, useRef } from 'react'

interface UseOutsideClickProps {
  ref: React.RefObject<HTMLElement>
  callback: () => void
}

export const useOutsideClick = ({ ref, callback }: UseOutsideClickProps) => {
  // Keep latest callback in a ref to avoid re-subscribe on every render.
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        callbackRef.current()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
