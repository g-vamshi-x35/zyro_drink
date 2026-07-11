import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="font-display text-[120px] font-semibold leading-none text-zyro-green">
        404
      </span>
      <h1 className="font-display text-3xl font-semibold uppercase text-zyro-white">
        Signal lost
      </h1>
      <p className="max-w-[40ch] font-body text-zyro-ink-dim">
        That page doesn&apos;t exist. Let&apos;s get you back to full power.
      </p>
      <Button to="/">Back to Home</Button>
    </Container>
  )
}
