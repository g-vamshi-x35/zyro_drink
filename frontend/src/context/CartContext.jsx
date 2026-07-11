'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { SINGLE_PRICE } from '@/data/flavors'

const CartContext = createContext(null)

const STORAGE_KEY = 'zyro_cart'

function readStoredCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [hydrated, setHydrated] = useState(false)

  // Load persisted cart once on mount. This must run post-mount rather than
  // in a lazy useState initializer: reading localStorage during the initial
  // render would make client output diverge from the server-rendered (empty)
  // HTML and trigger a hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, see comment above
    setItems(readStoredCart())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, hydrated])

  const addItem = (flavor, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === flavor.slug)
      if (existing) {
        return prev.map((i) =>
          i.slug === flavor.slug ? { ...i, qty: Math.min(24, i.qty + qty) } : i,
        )
      }
      return [
        ...prev,
        {
          slug: flavor.slug,
          name: flavor.name,
          price: flavor.price ?? SINGLE_PRICE,
          colorHex: flavor.colorHex,
          image: flavor.card,
          qty,
        },
      ]
    })
  }

  const removeItem = (slug) => setItems((prev) => prev.filter((i) => i.slug !== slug))

  // `qtyOrUpdater` may be a number (set to an absolute value) or a function
  // `(currentQty) => nextQty` — callers adjusting relative to the current
  // quantity (+1/-1 buttons) should always use the function form so rapid
  // clicks read the latest state instead of a stale value from their render.
  const updateQty = (slug, qtyOrUpdater) =>
    setItems((prev) =>
      prev.map((i) => {
        if (i.slug !== slug) return i
        const next = typeof qtyOrUpdater === 'function' ? qtyOrUpdater(i.qty) : qtyOrUpdater
        return { ...i, qty: Math.max(1, Math.min(24, next)) }
      }),
    )

  const clear = () => setItems([])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items])

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, clear, count, subtotal, hydrated }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
