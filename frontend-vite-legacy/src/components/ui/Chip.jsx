import clsx from 'clsx'

export default function Chip({ children, dotColor = 'zyro-green', className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border border-zyro-border px-4 py-2',
        'font-mono text-xs uppercase tracking-wider text-zyro-ink-dim',
        className,
      )}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: `var(--color-${dotColor})` }}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
