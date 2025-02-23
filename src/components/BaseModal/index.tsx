interface BaseModalProps {
  showModal: boolean
  children: React.ReactNode
  onClick?: () => void
  onClose?: () => void
}

export const BaseModal = ({
  showModal,
  children,
  onClick,
  onClose
}: BaseModalProps) => {
  if (!showModal) return null
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto mb-[9rem] mx-auto min-w-[22rem] max-w-2xl">
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-main text-text">
            <>{children}</>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-logoColor opacity-50"></div>
    </>
  )
}
