import Image from 'next/image'
import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import { FLAVORS } from '@/data/flavors'
import bannerWhyZyro from '@/assets/images/banner-why-zyro.webp'

export const metadata = {
  title: 'Gallery',
  description: 'A look at the full ZYRO range — Green Apple, Raspberry, Blueberry + Lemon, and Lemon.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Range"
        title="Four Cans, One World"
        description="Every flavor gets its own color, its own mood, same clean formula underneath."
      />

      <section className="pb-24">
        <Container>
          <div className="grid auto-rows-[280px] grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[340px]">
            {FLAVORS.map((flavor, i) => (
              <figure
                key={flavor.slug}
                className={
                  i === 0
                    ? 'relative col-span-2 row-span-2 overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2'
                    : 'relative overflow-hidden rounded-2xl'
                }
              >
                <Image
                  src={flavor.card}
                  alt={`ZYRO ${flavor.name} can`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zyro-bg/90 to-transparent p-5">
                  <span className="font-display text-lg font-semibold uppercase text-zyro-white">
                    {flavor.name}
                  </span>
                </figcaption>
              </figure>
            ))}

            <figure className="relative col-span-2 overflow-hidden rounded-2xl lg:col-span-4">
              <Image
                src={bannerWhyZyro}
                alt="ZYRO Green Apple and Blueberry + Lemon cans"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </figure>
          </div>
        </Container>
      </section>
    </>
  )
}
