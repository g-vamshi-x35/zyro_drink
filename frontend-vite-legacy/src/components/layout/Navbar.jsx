import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import logo from '@/assets/images/logo.webp'

const NAV_LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/ingredients', label: 'Ingredients' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
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
          <NavLink to="/" className="shrink-0" aria-label="ZYRO home">
            <img src={logo} alt="ZYRO" className="h-8 w-auto" width={168} height={79} />
          </NavLink>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  clsx(
                    'font-body text-[15px] transition-colors',
                    isActive ? 'text-zyro-green' : 'text-zyro-ink-dim hover:text-zyro-ink',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/products" variant="primary" className="px-6 py-3 text-sm">
              Shop Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-zyro-ink lg:hidden"
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
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'rounded-lg px-3 py-3 font-body text-lg',
                      isActive ? 'text-zyro-green' : 'text-zyro-ink',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/products" onClick={() => setMenuOpen(false)} className="mt-3 w-full">
                Shop Now
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
