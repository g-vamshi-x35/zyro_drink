import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description, path = '' }) {
  const fullTitle = title ? `${title} — ZYRO` : 'ZYRO — Energy Redefined'
  const url = `https://drinkzyro.com${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
