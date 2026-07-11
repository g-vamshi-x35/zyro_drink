import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

const REVIEWS = [
  {
    quote:
      "I've tried every energy drink on the shelf. This is the first one that doesn't leave me wired and useless by 4pm.",
    name: 'Priya S.',
    role: 'Software Engineer',
  },
  {
    quote:
      'Green Apple actually tastes like green apple, not green apple-flavored candy. Zero sugar and I can still taste it.',
    name: 'Jordan K.',
    role: 'Graphic Designer',
  },
  {
    quote:
      'Pre-workout without the crash after. Blueberry + Lemon is in my gym bag permanently now.',
    name: 'Maya R.',
    role: 'Personal Trainer',
  },
]

export default function Testimonials() {
  return (
    <section className="border-t border-zyro-border py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Loved By The Relentless" title="What People Say" align="center" className="mx-auto" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.1}
              className="flex flex-col gap-5 rounded-2xl border border-zyro-border bg-zyro-surface p-8"
            >
              <div className="flex gap-1 text-zyro-green" aria-hidden="true">
                {'★★★★★'.split('').map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>
              <p className="font-body text-sm leading-relaxed text-zyro-ink">"{r.quote}"</p>
              <div className="mt-auto">
                <p className="font-body text-sm font-semibold text-zyro-white">{r.name}</p>
                <p className="font-mono text-xs text-zyro-ink-faint">{r.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
