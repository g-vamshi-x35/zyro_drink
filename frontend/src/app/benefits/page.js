import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Chip from '@/components/ui/Chip'
import { BENEFITS, CHIPS } from '@/data/flavors'

export const metadata = {
  title: 'Benefits',
  description:
    'What ZYRO actually does — calm focus, creative flow, mental energy, and enhanced mood, built for every moment.',
  alternates: { canonical: '/benefits' },
}

const BENEFIT_COPY = {
  focus: 'A settled, locked-in state — no scattered energy, just a clear line to what you’re working on.',
  flow: 'The kind of loose, associative thinking that makes creative and technical work click.',
  energy: 'Real alertness that holds steady for hours, not a spike that dumps you an hour later.',
  mood: 'A lift in mood alongside the mental lift — energy that feels good, not just functional.',
}

const MOMENTS = [
  { label: 'Study', copy: 'Long reading sessions and problem sets without the 2pm fog.' },
  { label: 'Work', copy: 'Deep work blocks, back-to-back meetings, and the last push before a deadline.' },
  { label: 'Gaming', copy: 'Reaction time and focus that hold up through a long session.' },
  { label: 'Gym', copy: 'Clean pre-workout energy without the sugar crash on the way home.' },
]

export default function BenefitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Unlock Your Power"
        title="Built For Every Moment"
        description="Study. Work. Gaming. Gym. ZYRO delivers clean energy whenever you need it."
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.key} className="flex flex-col gap-3">
                <span className="h-1 w-10 rounded-full bg-zyro-green" aria-hidden="true" />
                <h3 className="font-display text-2xl font-semibold uppercase text-zyro-white">
                  {b.label}
                </h3>
                <p className="font-body text-sm leading-relaxed text-zyro-ink-dim">
                  {BENEFIT_COPY[b.key]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zyro-border py-24">
        <Container>
          <SectionHeading
            eyebrow="Where It Fits"
            title="Every Moment That Needs It"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-zyro-border bg-zyro-border sm:grid-cols-2 lg:grid-cols-4">
            {MOMENTS.map((m) => (
              <div key={m.label} className="flex flex-col gap-2 bg-zyro-surface p-8">
                <h3 className="font-display text-xl font-semibold uppercase text-zyro-green">
                  {m.label}
                </h3>
                <p className="font-body text-sm leading-relaxed text-zyro-ink-dim">{m.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
