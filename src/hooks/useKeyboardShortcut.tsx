import { useEffect, useRef } from 'react'

interface UseKeyboardShortcutProps {
  keys: string | string[]
  isEnabled: boolean
  onKeyPressed: () => void
}

export const useKeyboardShortcut = ({
  keys,
  isEnabled = false,
  onKeyPressed
}: UseKeyboardShortcutProps) => {
  // Keep latest callback in a ref to avoid re-subscribe on every render.
  const onKeyPressedRef = useRef(onKeyPressed)
  onKeyPressedRef.current = onKeyPressed

  // Normalize to a stable string to avoid changing the effect's dependency each render.
  const keyList = Array.isArray(keys) ? keys : [keys]
  const keysKey = keyList.join(',')

  useEffect(() => {
    if (!isEnabled) return

    const matchKeys = keysKey.split(',')
    const keyDownHandler = (e: globalThis.KeyboardEvent) => {
      if (matchKeys.includes(e.code)) {
        e.preventDefault()
        onKeyPressedRef.current()
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [keysKey, isEnabled])
}
