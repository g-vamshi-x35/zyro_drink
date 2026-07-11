import { notFound } from 'next/navigation'
import { FLAVORS, getFlavorBySlug } from '@/data/flavors'
import ProductDetailClient from '@/components/product/ProductDetailClient'

export function generateStaticParams() {
  return FLAVORS.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const flavor = getFlavorBySlug(slug)
  if (!flavor) return {}

  return {
    title: flavor.name,
    description: flavor.description,
    alternates: { canonical: `/products/${flavor.slug}` },
  }
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params
  const flavor = getFlavorBySlug(slug)

  if (!flavor) notFound()

  return <ProductDetailClient flavor={flavor} />
}
