import Seo from '@/components/Seo'
import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import { FLAVORS } from '@/data/flavors'
import bannerWhyZyro from '@/assets/images/banner-why-zyro.webp'

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery"
        description="A look at the full ZYRO range — Green Apple, Raspberry, Blueberry + Lemon, and Lemon."
        path="/gallery"
      />
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
                <img
                  src={flavor.card}
                  alt={`ZYRO ${flavor.name} can`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zyro-bg/90 to-transparent p-5">
                  <span className="font-display text-lg font-semibold uppercase text-zyro-white">
                    {flavor.name}
                  </span>
                </figcaption>
              </figure>
            ))}

            <figure className="relative col-span-2 overflow-hidden rounded-2xl lg:col-span-4">
              <img
                src={bannerWhyZyro}
                alt="ZYRO Green Apple and Blueberry + Lemon cans"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </Container>
      </section>
    </>
  )
}
