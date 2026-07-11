import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { BENEFITS } from '@/data/flavors'

const COPY = {
  focus: 'A settled, locked-in state — no scattered energy.',
  flow: 'Loose, associative thinking that makes creative work click.',
  energy: 'Real alertness that holds steady for hours.',
  mood: 'A lift in mood alongside the mental lift.',
}

export default function PerformanceTeaser() {
  return (
    <section className="border-t border-zyro-border py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Formulated For Performance"
          title="Unlock Your Power"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.key} delay={i * 0.08} className="flex flex-col items-center gap-3 text-center">
              <span className="h-1 w-10 rounded-full bg-zyro-green" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold uppercase text-zyro-white">
                {b.label}
              </h3>
              <p className="font-body text-sm leading-relaxed text-zyro-ink-dim">{COPY[b.key]}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
