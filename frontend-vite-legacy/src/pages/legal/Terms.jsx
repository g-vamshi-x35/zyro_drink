import Seo from '@/components/Seo'
import Container from '@/components/ui/Container'

export default function Terms() {
  return (
    <>
      <Seo title="Terms of Service" path="/legal/terms" />
      <Container className="max-w-[70ch] py-32">
        <h1 className="font-display text-4xl font-semibold uppercase text-zyro-white">
          Terms of Service
        </h1>
        <div className="mt-8 flex flex-col gap-6 font-body text-zyro-ink-dim">
          <p>
            These Terms of Service govern your use of the ZYRO website and the purchase of ZYRO
            products. By using this site, you agree to these terms.
          </p>
          <p>
            All product descriptions, pricing, and availability are subject to change without
            notice. ZYRO reserves the right to refuse or cancel any order at its discretion.
          </p>
          <p>
            Content on this site — including the ZYRO name, logo, can designs, and photography —
            is the property of ZYRO and may not be reproduced without written permission.
          </p>
          <p>
            This is placeholder legal copy for a portfolio project. Replace with reviewed terms
            before any real commercial launch.
          </p>
        </div>
      </Container>
    </>
  )
}
