import Image from 'next/image'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { SUPPLEMENT_FACTS } from '@/data/flavors'
import labelImg from '@/assets/images/label-green-apple-detail.webp'

export default function IngredientsTeaser() {
  return (
    <section className="border-t border-zyro-border py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative order-2 aspect-[2/3] overflow-hidden rounded-2xl lg:order-1">
          <Image
            src={labelImg}
            alt="ZYRO Green Apple full ingredient label"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal className="order-1 flex flex-col gap-6 lg:order-2">
          <SectionHeading
            eyebrow="No Mystery Blends"
            title="What's Actually Inside"
            description="Real, functional doses of caffeine, L-theanine, taurine, and B vitamins — printed on the can, not hidden behind a proprietary blend."
          />
          <dl className="divide-y divide-zyro-border border-y border-zyro-border">
            {SUPPLEMENT_FACTS.map((fact) => (
              <div key={fact.name} className="flex items-center justify-between py-4">
                <dt className="font-body text-sm text-zyro-ink-dim">{fact.name}</dt>
                <dd className="font-mono text-sm tabular-nums text-zyro-ink">{fact.amount}</dd>
              </div>
            ))}
          </dl>
          <Button to="/ingredients" variant="outline" className="w-fit">
            Full Ingredient Breakdown
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
