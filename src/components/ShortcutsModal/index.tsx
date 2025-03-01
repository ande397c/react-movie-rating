import { BaseModal } from '@/components/BaseModal'
import { Chip } from '@/components/Chip'
import { Button } from '@/components/Button'

interface ShortcutsModalProps {
  showModal: boolean
  onClose: () => void
}
export const ShortcutsModal = ({ showModal, onClose }: ShortcutsModalProps) => {
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
          Generate new pair: <Chip text="Space" /> or <Chip text="Enter" />
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
