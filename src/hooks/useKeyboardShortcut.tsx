import { useEffect } from 'react'

interface UseKeyboardShortcutProps {
  keys: string | string[]
  isEnabled: boolean
  onKeyPressed: () => void
}

export const useKeyboardShortcut = ({
  keys,
  isEnabled,
  onKeyPressed
}: UseKeyboardShortcutProps) => {
  useEffect(() => {
    if (!isEnabled) return

    const keyDownHandler = (e: globalThis.KeyboardEvent) => {
      const isKeyMatch = Array.isArray(keys)
        ? keys.includes(e.code)
        : e.code === keys
      if (isKeyMatch) {
        e.preventDefault()
        onKeyPressed()
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [keys, onKeyPressed])
}
