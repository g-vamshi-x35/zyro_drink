import Image from 'next/image'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { FLAVORS } from '@/data/flavors'

export default function GalleryTeaser() {
  return (
    <section className="border-t border-zyro-border py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="One World, Four Cans" title="The Gallery" />
          <Button to="/gallery" variant="outline" className="shrink-0">
            Full Gallery
          </Button>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {FLAVORS.map((flavor, i) => (
            <Reveal
              key={flavor.slug}
              delay={i * 0.06}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={flavor.card}
                alt={`ZYRO ${flavor.name}`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
