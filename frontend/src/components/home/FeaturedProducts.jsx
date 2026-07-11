import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/product/ProductCard'
import { FLAVORS } from '@/data/flavors'

export default function FeaturedProducts() {
  return (
    <section id="flavors" className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="The Range" title="Four Flavors, Zero Compromise" />
          <Button to="/products" variant="outline" className="shrink-0">
            View All
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLAVORS.map((flavor, i) => (
            <Reveal key={flavor.slug} delay={i * 0.08}>
              <ProductCard flavor={flavor} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
