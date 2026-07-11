import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/layout/SmoothScroll'
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-big-shoulders',
  display: 'swap',
  // Next.js has no built-in fallback-font metrics for this family; disable
  // the auto-adjustment instead of logging a warning on every build/dev run.
  adjustFontFallback: false,
  fallback: ['Arial Narrow', 'sans-serif'],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://drinkzyro.com'),
  title: {
    default: 'ZYRO — Energy Redefined',
    template: '%s — ZYRO',
  },
  description:
    'ZYRO is a premium energy drink formulated with clean caffeine, L-theanine, and B-vitamins. Zero sugar. Four bold flavors. Unlock your power.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ZYRO — Energy Redefined',
    description: 'Premium energy drink. Clean caffeine, zero sugar, four bold flavors.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport = {
  themeColor: '#050505',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-zyro-bg">
        <AuthProvider>
          <CartProvider>
            <SmoothScroll>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </SmoothScroll>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
