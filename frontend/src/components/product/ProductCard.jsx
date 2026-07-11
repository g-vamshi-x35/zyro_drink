import Link from 'next/link'
import Image from 'next/image'
import { SINGLE_PRICE } from '@/data/flavors'

export default function ProductCard({ flavor }) {
  return (
    <Link
      id={flavor.slug}
      href={`/products/${flavor.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zyro-border bg-zyro-surface transition-colors hover:border-[var(--accent)]"
      style={{ '--accent': flavor.colorHex }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={flavor.card}
          alt={`ZYRO ${flavor.name} can`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: flavor.colorHex }}
            aria-hidden="true"
          />
          <span className="font-mono text-xs uppercase tracking-wider text-zyro-ink-faint">
            Naturally Flavored
          </span>
        </div>
        <h3 className="font-display text-2xl font-semibold uppercase text-zyro-white">
          {flavor.name}
        </h3>
        <p className="line-clamp-2 font-body text-sm text-zyro-ink-dim">{flavor.tagline}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-mono text-sm tabular-nums text-zyro-ink">
            ${SINGLE_PRICE.toFixed(2)}
          </span>
          <span
            className="font-body text-sm font-semibold transition-colors"
            style={{ color: flavor.colorHex }}
          >
            View can →
          </span>
        </div>
      </div>
    </Link>
  )
}
