import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import { FAQS } from '@/data/faqs'

export default function FaqTeaser() {
  return (
    <section className="border-t border-zyro-border py-24 lg:py-32">
      <Container className="max-w-[80ch]">
        <SectionHeading eyebrow="Good To Know" title="Frequently Asked" align="center" className="mx-auto" />
        <div className="mt-14">
          <Accordion items={FAQS.slice(0, 4)} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/faq" variant="outline">
            All Questions
          </Button>
        </div>
      </Container>
    </section>
  )
}
