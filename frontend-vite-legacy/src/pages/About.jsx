import Seo from '@/components/Seo'
import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import bgAtmosphere from '@/assets/images/bg-atmosphere.webp'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="ZYRO's story, mission, and process — a premium energy drink built for focus, not just a buzz."
        path="/about"
      />
      <PageHero
        eyebrow="Our Story"
        title="Energy, Without the Excuses"
        description="ZYRO started with a simple complaint: every energy drink on the shelf either tasted like candy or crashed you by 3pm. We set out to build the one that didn't."
      />

      <section className="grid gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-6 py-20 lg:px-16 lg:py-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zyro-green">
            Mission
          </span>
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-zyro-white lg:text-4xl">
            Real doses. Real focus. No compromise.
          </h2>
          <p className="max-w-[48ch] font-body text-zyro-ink-dim">
            We formulate every can with functional doses of caffeine, L-theanine, taurine, and B
            vitamins — not trace amounts hidden behind a proprietary blend. Zero sugar, zero
            fillers, four flavors that actually taste like something.
          </p>
        </div>
        <div className="relative min-h-[360px]">
          <img
            src={bgAtmosphere}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="border-t border-zyro-border py-24">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div>
            <SectionHeading eyebrow="Vision" title="Redefine the Can" />
            <p className="mt-5 font-body text-sm leading-relaxed text-zyro-ink-dim">
              We want ZYRO on the desk of every person doing focused, demanding work — not just
              the gym bag. Energy that respects your attention, not just your adrenaline.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Process" title="Formulated, Not Guessed" />
            <p className="mt-5 font-body text-sm leading-relaxed text-zyro-ink-dim">
              Every ingredient is chosen and dosed deliberately, then tasted and re-tasted until a
              flavor earns its place in the range. Nothing ships because it's "close enough."
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Manufacturing" title="Small Batch, Consistent" />
            <p className="mt-5 font-body text-sm leading-relaxed text-zyro-ink-dim">
              Every can is 100% recyclable aluminum, produced in controlled small batches so
              quality doesn't drift as the range grows.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
