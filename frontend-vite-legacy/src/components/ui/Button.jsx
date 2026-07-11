import clsx from 'clsx'
import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-zyro-green text-zyro-bg hover:brightness-110',
  outline: 'border border-zyro-ink/20 text-zyro-ink hover:border-zyro-green hover:text-zyro-green',
  ghost: 'text-zyro-white/80 hover:text-zyro-green',
}

/**
 * Polymorphic CTA button. Renders a <Link> when `to` is passed,
 * an <a> when `href` is passed, otherwise a <button>.
 */
export default function Button({
  variant = 'primary',
  className,
  to,
  href,
  children,
  ...props
}) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5',
    'font-body text-[15px] font-semibold tracking-wide transition-colors duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zyro-green',
    VARIANTS[variant],
    variant === 'outline' && 'border',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
