const WORDS = ['Calm Focus', 'Creative Flow', 'Mental Energy', 'Enhanced Mood', 'Zero Sugar']

export default function MarqueeStrip() {
  const items = [...WORDS, ...WORDS]

  return (
    <div className="overflow-hidden border-y border-zyro-border bg-zyro-surface py-5">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-10 font-display text-2xl font-medium uppercase tracking-tight text-zyro-ink-faint"
          >
            {word}
            <span className="text-zyro-green" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
