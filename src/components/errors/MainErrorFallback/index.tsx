import { Button } from '@/components/ui/Button'

export const MainErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold text-text">
        Ooops, something went wrong :(
      </h2>
      <Button
        className="mt-4"
        width="fit"
        text="Refresh"
        onClick={() => window.location.assign(window.location.origin)}
      />
    </div>
  )
}
