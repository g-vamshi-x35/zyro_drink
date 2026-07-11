import Container from '@/components/ui/Container'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-zyro-border pb-16 pt-40">
      <Container className="flex flex-col gap-5">
        {eyebrow && (
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zyro-green">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-[16ch] text-balance font-display text-[48px] font-semibold uppercase leading-[0.95] tracking-tight text-zyro-white sm:text-[64px]">
          {title}
        </h1>
        {description && (
          <p className="max-w-[60ch] text-balance font-body text-lg leading-relaxed text-zyro-ink-dim">
            {description}
          </p>
        )}
      </Container>
    </section>
  )
}
