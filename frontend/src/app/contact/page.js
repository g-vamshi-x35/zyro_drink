import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import ContactForm from '@/components/ui/ContactForm'
import SocialIcons from '@/components/ui/SocialIcons'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the ZYRO team — support, press, or partnership inquiries.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get In Touch" title="Talk To Us" />

      <section className="pb-24">
        <Container className="grid gap-16 lg:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zyro-ink-faint">
                Email
              </h3>
              <a
                href="mailto:hello@drinkzyro.com"
                className="mt-2 block font-display text-2xl font-semibold text-zyro-white hover:text-zyro-green"
              >
                hello@drinkzyro.com
              </a>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zyro-ink-faint">
                Follow The Energy
              </h3>
              <p className="mt-2 font-body text-sm text-zyro-ink-dim">@drinkzyro</p>
              <SocialIcons className="mt-4 flex gap-3" />
            </div>
            <div className="flex h-56 items-center justify-center rounded-2xl border border-zyro-border bg-zyro-surface">
              <span className="font-mono text-xs uppercase tracking-widest text-zyro-ink-faint">
                Map coming soon
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
