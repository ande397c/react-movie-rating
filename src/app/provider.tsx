import { ReactNode, StrictMode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { MainErrorFallback } from '@/components/errors/MainErrorFallback'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        {children}
      </ErrorBoundary>
    </StrictMode>
  )
}
