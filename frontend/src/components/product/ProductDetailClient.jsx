'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Chip from '@/components/ui/Chip'
import ProductCard from '@/components/product/ProductCard'
import { FLAVORS, SUPPLEMENT_FACTS, BENEFITS, CHIPS, SINGLE_PRICE } from '@/data/flavors'
import { useCart } from '@/context/CartContext'

export default function ProductDetailClient({ flavor }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const others = FLAVORS.filter((f) => f.slug !== flavor.slug)

  const handleAddToCart = () => {
    addItem(flavor, qty)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2200)
  }

  return (
    <>
      <section className="pt-32">
        <Container className="grid gap-12 pb-20 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zyro-border">
            <Image
              src={flavor.hero}
              alt={`ZYRO ${flavor.name} can`}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <Link
              href="/products"
              className="w-fit font-mono text-xs uppercase tracking-widest text-zyro-ink-faint hover:text-zyro-green"
            >
              ← All Flavors
            </Link>

            <div>
              <span
                className="font-mono text-xs uppercase tracking-[0.25em]"
                style={{ color: flavor.colorHex }}
              >
                Naturally Flavored
              </span>
              <h1 className="mt-3 font-display text-4xl font-semibold uppercase leading-none text-zyro-white sm:text-5xl">
                {flavor.name}
              </h1>
              <p className="mt-3 font-body text-lg text-zyro-ink-dim">{flavor.tagline}</p>
            </div>

            <p className="max-w-[52ch] font-body text-sm leading-relaxed text-zyro-ink-dim">
              {flavor.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <Chip key={chip} dotColor={flavor.color}>
                  {chip}
                </Chip>
              ))}
            </div>

            <div className="flex items-center gap-6 border-y border-zyro-border py-6">
              <span className="font-mono text-2xl tabular-nums text-zyro-white">
                ${(SINGLE_PRICE * qty).toFixed(2)}
              </span>
              <div className="flex items-center rounded-full border border-zyro-border">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 font-mono text-lg text-zyro-ink-dim hover:text-zyro-green"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-8 text-center font-mono text-sm tabular-nums text-zyro-ink">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(24, q + 1))}
                  className="px-4 py-2 font-mono text-lg text-zyro-ink-dim hover:text-zyro-green"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 rounded-full bg-zyro-green px-7 py-3.5 font-body text-sm font-semibold text-zyro-bg transition-opacity hover:opacity-90"
              >
                {added ? 'Added ✓' : 'Add to Cart'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {BENEFITS.map((b) => (
                <div key={b.key} className="flex flex-col gap-1">
                  <span
                    className="h-1 w-6 rounded-full"
                    style={{ background: flavor.colorHex }}
                    aria-hidden="true"
                  />
                  <span className="font-body text-xs text-zyro-ink-dim">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zyro-border py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase text-zyro-white">
              Supplement Facts
            </h2>
            <dl className="mt-6 divide-y divide-zyro-border border-y border-zyro-border">
              {SUPPLEMENT_FACTS.map((fact) => (
                <div key={fact.name} className="flex items-center justify-between py-4">
                  <dt className="font-body text-sm text-zyro-ink-dim">{fact.name}</dt>
                  <dd className="font-mono text-sm tabular-nums text-zyro-ink">{fact.amount}</dd>
                </div>
              ))}
            </dl>
          </div>
          {flavor.label && (
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-zyro-border">
              <Image
                src={flavor.label}
                alt={`ZYRO ${flavor.name} full label`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-zyro-border py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold uppercase text-zyro-white">
            More From The Range
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((f) => (
              <ProductCard key={f.slug} flavor={f} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
