import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut'
import { BaseModal } from '@/components/ui/BaseModal'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

interface ShortcutsModalProps {
  showModal: boolean
  onClose: () => void
}
export const ShortcutsModal = ({ showModal, onClose }: ShortcutsModalProps) => {
  useKeyboardShortcut({
    keys: ['Escape'],
    isEnabled: true,
    onKeyPressed: onClose
  })
  if (!showModal) return null
  return (
    <BaseModal
      title="Keybord shortcuts"
      showModal={showModal}
      size="sm"
      close={onClose}
      enableClickOutside
    >
      <>
        <p className="my-8 text-lg text-center">
          New pair: <Chip text="Space" /> or <Chip text="Enter" />
        </p>
      </>
      <BaseModal.Actions>
        <Button
          className="sm:w-1/2"
          width="full"
          text="Understood!"
          onClick={onClose}
        />
      </BaseModal.Actions>
    </BaseModal>
  )
}
