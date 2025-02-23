import { Chip } from '@/components/Chip'
import { detectDevice } from '@/utils/detectDevice'
import { useViewport } from '@/hooks/useViewport'

export const ShortcutsBar = () => {
  const { viewport } = useViewport()
  if (detectDevice() !== 'PC' || viewport.device === 'MOBILE') {
    return null
  }
  return (
    <div className="bg-button rounded-lg py-4 px-4 text-base">
      <p>
        <Chip text="ENTER" />
        /
        <Chip text="SPACE" />
        to change pair
      </p>
    </div>
  )
}
