import { useRef } from 'react'
import clsx from 'clsx'
import { useOutsideClick } from '@/hooks/useOutsideClick'

interface BaseModalProps {
  showModal: boolean
  title: string
  size?: 'sm' | 'md' | 'lg'
  enableClickOutside?: boolean
  children: React.ReactNode
  close?: () => void
}

export const BaseModal = ({
  showModal,
  title,
  size = 'sm',
  enableClickOutside = false,
  children,
  close
}: BaseModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  if (enableClickOutside && close) {
    useOutsideClick({
      ref,
      callback: close
    })
  }

  if (!showModal) return null

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className={clsx({
            'relative mb-[9rem] mx-auto w-full min-w-[20rem]': true,
            'w-2/5 max-w-lg': size === 'sm',
            'w-3/5 max-w-xl': size === 'md',
            'w-3/4 max-w-3xl': size === 'lg'
          })}
          ref={ref}
        >
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-main text-text">
            <div className="flex items-center justify-center flex-col p-5 pb-0">
              <h3 className="text-3xl font-semibold">{title}</h3>
            </div>
            <div className="px-6 mb-6">{children}</div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-logoColor opacity-65"></div>
    </>
  )
}

interface BaseModalActionsProps {
  children: React.ReactNode
}

const Actions = ({ children }: BaseModalActionsProps) => {
  return (
    <div className="flex justify-center flex-col sm:flex-row gap-2 mt-6">
      {children}
    </div>
  )
}

BaseModal.Actions = Actions
