import Seo from '@/components/Seo'
import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import { SUPPLEMENT_FACTS, NUTRITION } from '@/data/flavors'

const INGREDIENTS = [
  {
    name: 'Caffeine',
    amount: '150mg',
    copy: 'Sourced for clean, steady energy — enough to unlock focus without tipping into jitters or a hard crash.',
  },
  {
    name: 'L-Theanine',
    amount: '200mg',
    copy: 'An amino acid that smooths out caffeine’s edge, keeping the lift calm instead of wired.',
  },
  {
    name: 'Alpha-GPC + B Vitamins',
    amount: '400mg + B Complex',
    copy: 'Supports mental clarity and cognitive performance, so the energy shows up as focus, not just a buzz.',
  },
  {
    name: 'Taurine',
    amount: '1000mg',
    copy: 'A staple in performance formulas, included at a real, useful dose — not a trace amount for the label.',
  },
  {
    name: 'N-Acetyl L-Tyrosine',
    amount: '1000mg',
    copy: 'An amino acid precursor to key neurotransmitters, included to support sustained mental energy.',
  },
  {
    name: 'Natural Flavor',
    amount: 'Zero Sugar',
    copy: 'Every can is naturally flavored, contains no fruit juice, and carries zero grams of added sugar.',
  },
]

export default function Ingredients() {
  return (
    <>
      <Seo
        title="Ingredients"
        description="What's actually in a can of ZYRO — real doses of caffeine, L-theanine, taurine, and B vitamins, with zero sugar."
        path="/ingredients"
      />
      <PageHero
        eyebrow="Formulated for Performance"
        title="What's Actually Inside"
        description="No proprietary blends, no mystery doses. Here's exactly what's in every can, and why it's there."
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INGREDIENTS.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-3 rounded-2xl border border-zyro-border bg-zyro-surface p-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold uppercase text-zyro-white">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-mono text-sm text-zyro-green">{item.amount}</span>
                </div>
                <p className="font-body text-sm leading-relaxed text-zyro-ink-dim">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zyro-border py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Per Can"
              title="Supplement Facts"
              description="Identical across every flavor in the range — 250mL / 8.45 fl oz."
            />
            <dl className="mt-8 divide-y divide-zyro-border border-y border-zyro-border">
              {SUPPLEMENT_FACTS.map((fact) => (
                <div key={fact.name} className="flex items-center justify-between py-4">
                  <dt className="font-body text-sm text-zyro-ink-dim">{fact.name}</dt>
                  <dd className="font-mono text-sm tabular-nums text-zyro-ink">{fact.amount}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <SectionHeading eyebrow="Nutrition" title="Nutrition Facts" />
            <dl className="mt-8 divide-y divide-zyro-border border-y border-zyro-border">
              <div className="flex items-center justify-between py-4">
                <dt className="font-body text-sm text-zyro-ink-dim">Serving Size</dt>
                <dd className="font-mono text-sm text-zyro-ink">{NUTRITION.servingSize}</dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="font-body text-sm text-zyro-ink-dim">Calories</dt>
                <dd className="font-mono text-sm tabular-nums text-zyro-ink">
                  {NUTRITION.calories}
                </dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="font-body text-sm text-zyro-ink-dim">Total Fat</dt>
                <dd className="font-mono text-sm tabular-nums text-zyro-ink">
                  {NUTRITION.totalFat}
                </dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="font-body text-sm text-zyro-ink-dim">Sodium</dt>
                <dd className="font-mono text-sm tabular-nums text-zyro-ink">
                  {NUTRITION.sodium}
                </dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="font-body text-sm text-zyro-ink-dim">Total Carbohydrate</dt>
                <dd className="font-mono text-sm tabular-nums text-zyro-ink">
                  {NUTRITION.totalCarbohydrate}
                </dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="font-body text-sm text-zyro-ink-dim">Total Sugars</dt>
                <dd className="font-mono text-sm tabular-nums text-zyro-ink">
                  {NUTRITION.totalSugars}
                </dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="font-body text-sm text-zyro-ink-dim">Protein</dt>
                <dd className="font-mono text-sm tabular-nums text-zyro-ink">
                  {NUTRITION.protein}
                </dd>
              </div>
            </dl>
            <p className="mt-4 font-mono text-xs text-zyro-ink-faint">
              Contains no fruit juice. Not a significant source of saturated fat, cholesterol, or
              dietary fiber.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
