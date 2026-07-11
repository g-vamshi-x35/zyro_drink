import Hero from '@/components/home/Hero'
import MarqueeStrip from '@/components/home/MarqueeStrip'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import IngredientsTeaser from '@/components/home/IngredientsTeaser'
import PerformanceTeaser from '@/components/home/PerformanceTeaser'
import WhyZyro from '@/components/home/WhyZyro'
import GalleryTeaser from '@/components/home/GalleryTeaser'
import Testimonials from '@/components/home/Testimonials'
import FaqTeaser from '@/components/home/FaqTeaser'
import FinalCta from '@/components/home/FinalCta'

export const metadata = {
  // No `title` here — inherits `metadata.title.default` from the root layout
  // so it doesn't get suffixed again by the layout's title `template`.
  description:
    'ZYRO is a premium energy drink formulated with clean caffeine, L-theanine, and B-vitamins. Zero sugar. Four bold flavors. Unlock your power.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedProducts />
      <IngredientsTeaser />
      <PerformanceTeaser />
      <WhyZyro />
      <GalleryTeaser />
      <Testimonials />
      <FaqTeaser />
      <FinalCta />
    </>
  )
}
