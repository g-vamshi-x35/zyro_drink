'use client'

import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { FLAVORS } from '@/data/flavors'

export default function ProductsClient() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return FLAVORS
    return FLAVORS.filter(
      (f) => f.name.toLowerCase().includes(q) || f.tagline.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <>
      <div className="mb-10 flex justify-end">
        <label htmlFor="product-search" className="sr-only">
          Search flavors
        </label>
        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search flavors…"
          className="w-full max-w-xs rounded-full border border-zyro-border bg-zyro-surface px-5 py-2.5 font-body text-sm text-zyro-ink placeholder:text-zyro-ink-faint focus:border-zyro-green focus:outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center font-body text-zyro-ink-dim">
          No flavors match &quot;{query}&quot;.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((flavor) => (
            <ProductCard key={flavor.slug} flavor={flavor} />
          ))}
        </div>
      )}
    </>
  )
}
