'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import logo from '@/assets/images/logo.png'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/ingredients', label: 'Ingredients' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function CartLink({ count }) {
  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${count} item${count === 1 ? '' : 's'}`}
      className="relative flex h-10 w-10 items-center justify-center text-zyro-ink-dim transition-colors hover:text-zyro-green"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h15l-1.5 9h-12z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          d="M6 6 5 3H2.5"
        />
        <circle cx="9.5" cy="19.5" r="1.4" fill="currentColor" />
        <circle cx="17.5" cy="19.5" r="1.4" fill="currentColor" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-zyro-green px-1 font-mono text-[10px] font-semibold text-zyro-bg">
          {count}
        </span>
      )}
    </Link>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const { count } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-zyro-bg/90 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div
        className={clsx(
          'border-b transition-colors duration-300',
          scrolled ? 'border-zyro-border' : 'border-transparent',
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" className="shrink-0" aria-label="ZYRO home">
            <Image src={logo} alt="ZYRO" className="h-8 w-auto" priority />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.to
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className={clsx(
                    'font-body text-[15px] transition-colors',
                    isActive ? 'text-zyro-green' : 'text-zyro-ink-dim hover:text-zyro-ink',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/login"
              className="font-body text-[15px] text-zyro-ink-dim transition-colors hover:text-zyro-ink"
            >
              {user ? user.email.split('@')[0] : 'Login'}
            </Link>
            {user && (
              <button
                type="button"
                onClick={signOut}
                className="font-mono text-xs uppercase tracking-wider text-zyro-ink-faint hover:text-zyro-pink"
              >
                Sign out
              </button>
            )}
            <CartLink count={count} />
            <Button to="/products" variant="primary" className="px-6 py-3 text-sm">
              Shop Now
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <CartLink count={count} />
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center text-zyro-ink"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="relative block h-4 w-6">
                <span
                  className={clsx(
                    'absolute inset-x-0 top-0 h-0.5 bg-current transition-transform duration-200',
                    menuOpen && 'translate-y-[7px] rotate-45',
                  )}
                />
                <span
                  className={clsx(
                    'absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform duration-200',
                    menuOpen && '-translate-y-[7px] -rotate-45',
                  )}
                />
              </span>
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-zyro-border bg-zyro-bg lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.to
                return (
                  <Link
                    key={link.to}
                    href={link.to}
                    onClick={closeMenu}
                    className={clsx(
                      'rounded-lg px-3 py-3 font-body text-lg',
                      isActive ? 'text-zyro-green' : 'text-zyro-ink',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-body text-lg text-zyro-ink"
              >
                {user ? user.email.split('@')[0] : 'Login'}
              </Link>
              {user && (
                <button
                  type="button"
                  onClick={() => {
                    signOut()
                    closeMenu()
                  }}
                  className="rounded-lg px-3 py-3 text-left font-mono text-xs uppercase tracking-wider text-zyro-ink-faint"
                >
                  Sign out
                </button>
              )}
              <Button to="/products" onClick={closeMenu} className="mt-3 w-full">
                Shop Now
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
