import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

export default function FinalCta() {
  return (
    <section className="border-t border-zyro-border py-24 lg:py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="max-w-[18ch] text-balance font-display text-4xl font-semibold uppercase leading-[0.95] text-zyro-white sm:text-6xl">
            Ready to <span className="text-zyro-green">Unlock Your Power?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button to="/products" className="mt-2">
            Shop the Range
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
