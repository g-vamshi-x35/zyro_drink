import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import ProductsClient from '@/components/product/ProductsClient'

export const metadata = {
  title: 'Products',
  description: 'Shop the full ZYRO range — Green Apple, Raspberry, Blueberry + Lemon, and Lemon.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Range"
        title="Four Flavors, Zero Compromise"
        description="Clean caffeine, zero sugar, every can formulated the same way — the only thing that changes is the flavor."
      />
      <section className="pb-24">
        <Container>
          <ProductsClient />
        </Container>
      </section>
    </>
  )
}
