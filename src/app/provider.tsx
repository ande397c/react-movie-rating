import { ReactNode, StrictMode } from 'react'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <StrictMode>{children}</StrictMode>
}
