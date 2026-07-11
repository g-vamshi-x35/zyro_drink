import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import SocialIcons from '@/components/ui/SocialIcons'
import NewsletterForm from '@/components/ui/NewsletterForm'
import logo from '@/assets/images/logo.webp'

const COLUMNS = [
  {
    heading: 'Shop',
    links: [
      { to: '/products', label: 'All Flavors' },
      { to: '/products#green-apple', label: 'Green Apple' },
      { to: '/products#raspberry', label: 'Raspberry' },
      { to: '/products#blueberry-lemon', label: 'Blueberry + Lemon' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'Our Story' },
      { to: '/ingredients', label: 'Ingredients' },
      { to: '/benefits', label: 'Benefits' },
      { to: '/gallery', label: 'Gallery' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-zyro-border bg-zyro-bg">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
        <div className="flex flex-col gap-5">
          <img src={logo} alt="ZYRO" className="h-8 w-auto" width={168} height={79} />
          <p className="max-w-[32ch] font-body text-sm text-zyro-ink-dim">
            Energy Redefined. Clean caffeine, zero sugar, four bold flavors — built for focus,
            not the crash.
          </p>
          <NewsletterForm />
          <SocialIcons className="mt-1 flex gap-3" />
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zyro-ink-faint">
              {col.heading}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-zyro-ink-dim transition-colors hover:text-zyro-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-zyro-border">
        <Container className="flex flex-col-reverse items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="font-mono text-xs text-zyro-ink-faint">
            © {new Date().getFullYear()} ZYRO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/legal/terms"
              className="font-mono text-xs text-zyro-ink-faint hover:text-zyro-ink-dim"
            >
              Terms
            </Link>
            <Link
              to="/legal/privacy"
              className="font-mono text-xs text-zyro-ink-faint hover:text-zyro-ink-dim"
            >
              Privacy
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
