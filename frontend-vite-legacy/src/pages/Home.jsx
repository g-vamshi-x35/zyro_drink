import Seo from '@/components/Seo'
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

export default function Home() {
  return (
    <>
      <Seo
        description="ZYRO is a premium energy drink formulated with clean caffeine, L-theanine, and B-vitamins. Zero sugar. Four bold flavors. Unlock your power."
        path="/"
      />
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
