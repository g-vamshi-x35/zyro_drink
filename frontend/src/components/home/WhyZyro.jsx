import Image from 'next/image'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import bannerImg from '@/assets/images/banner-why-zyro.webp'

const MOMENTS = ['Study', 'Work', 'Gaming', 'Gym']

export default function WhyZyro() {
  return (
    <section className="relative overflow-hidden border-t border-zyro-border py-24 lg:py-32">
      <Image
        src={bannerImg}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zyro-bg via-zyro-bg/80 to-zyro-bg" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-zyro-green">
            Why ZYRO
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-[16ch] text-balance font-display text-4xl font-semibold uppercase leading-[0.95] text-zyro-white sm:text-6xl">
            Built For Every Moment
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-[52ch] text-balance font-body text-lg text-zyro-ink-dim">
            Study. Work. Gaming. Gym. ZYRO delivers clean energy whenever you need it.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="flex flex-wrap justify-center gap-3 pt-2">
          {MOMENTS.map((m) => (
            <span
              key={m}
              className="rounded-full border border-zyro-border px-5 py-2 font-mono text-xs uppercase tracking-wider text-zyro-ink-dim"
            >
              {m}
            </span>
          ))}
        </Reveal>
        <Reveal delay={0.4}>
          <Button to="/benefits" variant="outline" className="mt-2">
            See The Benefits
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
