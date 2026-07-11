import CartClient from '@/components/cart/CartClient'

export const metadata = {
  title: 'Cart',
  alternates: { canonical: '/cart' },
}

export default function CartPage() {
  return <CartClient />
}
