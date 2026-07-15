import { Button } from '@/components/ui/Button'
import { paths } from '@/config/paths'

export const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-6 text-text">
      <h1 className="text-6xl font-semibold text-secondary">404</h1>
      <p className="text-lg max-w-prose text-center">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button text="Go home" width="fit" link={paths.landing} />
    </div>
  )
}
