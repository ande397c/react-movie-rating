import './progressbar.css'
import { FC, useEffect, useRef, useState } from 'react'

interface ProgressbarProps {
  running: boolean
  duration?: number
  onEnd: () => void
}

export const Progressbar: FC<ProgressbarProps> = ({
  duration = 2000,
  onEnd,
  running
}) => {
  const [width, setWidth] = useState(100)
  const cancelledRef = useRef(false)

  useEffect(() => {
    if (!running) {
      cancelledRef.current = true
      setWidth(100)
      return
    }

    cancelledRef.current = false

    const raf = requestAnimationFrame(() => setWidth(0))
    return () => cancelAnimationFrame(raf)
  }, [running])

  const handleTransitionEnd = () => {
    if (!cancelledRef.current) {
      onEnd()
    }
  }

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={width}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="progress-bar-fill"
        style={{
          width: `${width}%`,
          transitionDuration: running ? `${duration}ms` : '0ms'
        }}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  )
}
