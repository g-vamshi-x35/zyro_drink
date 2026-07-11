'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function CartClient() {
  const { items, updateQty, removeItem, subtotal, hydrated } = useCart()

  if (!hydrated) return null

  if (items.length === 0) {
    return (
      <Container className="flex min-h-[50vh] flex-col items-center justify-center gap-6 py-32 text-center">
        <h1 className="font-display text-3xl font-semibold uppercase text-zyro-white">
          Your cart is empty
        </h1>
        <p className="max-w-[40ch] font-body text-zyro-ink-dim">
          Add a can or two — every flavor is zero sugar, 150mg clean caffeine.
        </p>
        <Button to="/products">Shop the Range</Button>
      </Container>
    )
  }

  return (
    <Container className="grid gap-12 py-32 lg:grid-cols-[1fr_360px] lg:items-start">
      <div>
        <h1 className="mb-8 font-display text-3xl font-semibold uppercase text-zyro-white">
          Your Cart
        </h1>
        <ul className="divide-y divide-zyro-border border-y border-zyro-border">
          {items.map((item) => (
            <li key={item.slug} className="flex items-center gap-5 py-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-zyro-border bg-zyro-surface">
                <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: item.colorHex }}
                    aria-hidden="true"
                  />
                  <span className="font-display text-lg font-semibold uppercase text-zyro-white">
                    {item.name}
                  </span>
                </div>
                <span className="font-mono text-sm text-zyro-ink-dim">
                  ${item.price.toFixed(2)} each
                </span>
              </div>
              <div className="flex items-center rounded-full border border-zyro-border">
                <button
                  type="button"
                  onClick={() => updateQty(item.slug, (q) => q - 1)}
                  className="px-3 py-1.5 font-mono text-lg text-zyro-ink-dim hover:text-zyro-green"
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  −
                </button>
                <span className="w-6 text-center font-mono text-sm tabular-nums text-zyro-ink">
                  {item.qty}
                </span>
                <button
                  type="button"
                  onClick={() => updateQty(item.slug, (q) => q + 1)}
                  className="px-3 py-1.5 font-mono text-lg text-zyro-ink-dim hover:text-zyro-green"
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>
              </div>
              <span className="w-16 shrink-0 text-right font-mono text-sm tabular-nums text-zyro-white">
                ${(item.price * item.qty).toFixed(2)}
              </span>
              <button
                type="button"
                onClick={() => removeItem(item.slug)}
                className="shrink-0 font-mono text-xs uppercase tracking-wider text-zyro-ink-faint hover:text-zyro-pink"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <Link
          href="/products"
          className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-zyro-ink-faint hover:text-zyro-green"
        >
          ← Continue Shopping
        </Link>
      </div>

      <div className="rounded-2xl border border-zyro-border bg-zyro-surface p-8">
        <h2 className="font-display text-xl font-semibold uppercase text-zyro-white">Summary</h2>
        <div className="mt-6 flex items-center justify-between border-t border-zyro-border pt-4">
          <span className="font-body text-sm text-zyro-ink-dim">Subtotal</span>
          <span className="font-mono text-lg tabular-nums text-zyro-white">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 font-mono text-xs text-zyro-ink-faint">
          Shipping and taxes calculated at checkout.
        </p>
        <button
          type="button"
          disabled
          title="Checkout isn't wired up yet"
          className="mt-6 w-full cursor-not-allowed rounded-full bg-zyro-green px-7 py-3.5 font-body text-sm font-semibold text-zyro-bg opacity-50"
        >
          Proceed to Checkout
        </button>
        <p className="mt-3 text-center font-mono text-[11px] text-zyro-ink-faint">
          Checkout coming soon
        </p>
      </div>
    </Container>
  )
}
