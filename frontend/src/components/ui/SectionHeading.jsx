import clsx from 'clsx'

/**
 * Eyebrow + display headline pair used to open every homepage section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  accent = 'zyro-green',
  className,
}) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span
          className="font-mono text-xs font-medium uppercase tracking-[0.25em]"
          style={{ color: `var(--color-${accent})` }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-[40px] font-semibold uppercase leading-[0.95] tracking-tight text-zyro-white sm:text-[56px] lg:text-[64px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[52ch] text-balance font-body text-base leading-relaxed text-zyro-ink-dim/90">
          {description}
        </p>
      )}
    </div>
  )
}
