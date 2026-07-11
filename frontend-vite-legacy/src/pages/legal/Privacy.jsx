import Seo from '@/components/Seo'
import Container from '@/components/ui/Container'

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" path="/legal/privacy" />
      <Container className="max-w-[70ch] py-32">
        <h1 className="font-display text-4xl font-semibold uppercase text-zyro-white">
          Privacy Policy
        </h1>
        <div className="mt-8 flex flex-col gap-6 font-body text-zyro-ink-dim">
          <p>
            ZYRO collects the information you provide directly — such as your name, email, and
            shipping address — to fulfill orders, respond to inquiries, and send newsletter
            updates you've opted into.
          </p>
          <p>
            We do not sell your personal information to third parties. Payment details are
            processed by our payment provider and are never stored on ZYRO's own servers.
          </p>
          <p>
            You can unsubscribe from marketing emails at any time, and can request deletion of
            your account data by contacting us.
          </p>
          <p>
            This is placeholder legal copy for a portfolio project. Replace with reviewed policy
            before any real commercial launch.
          </p>
        </div>
      </Container>
    </>
  )
}
