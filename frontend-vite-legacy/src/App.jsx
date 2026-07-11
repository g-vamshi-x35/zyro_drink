import { Routes, Route } from 'react-router-dom'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Home from '@/pages/Home'
import Products from '@/pages/Products'
import ProductDetail from '@/pages/ProductDetail'
import Ingredients from '@/pages/Ingredients'
import Benefits from '@/pages/Benefits'
import About from '@/pages/About'
import Gallery from '@/pages/Gallery'
import Faq from '@/pages/Faq'
import Contact from '@/pages/Contact'
import Terms from '@/pages/legal/Terms'
import Privacy from '@/pages/legal/Privacy'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-zyro-bg">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
