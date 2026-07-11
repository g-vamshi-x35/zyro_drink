import Seo from '@/components/Seo'
import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import Accordion from '@/components/ui/Accordion'
import { FAQS } from '@/data/faqs'

export default function Faq() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to common questions about ZYRO's caffeine content, sugar, flavors, and shipping."
        path="/faq"
      />
      <PageHero
        eyebrow="Good to Know"
        title="Frequently Asked"
        description="Everything people ask us before their first case."
      />
      <section className="pb-24">
        <Container className="max-w-[80ch]">
          <Accordion items={FAQS} />
        </Container>
      </section>
    </>
  )
}
