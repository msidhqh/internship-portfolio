import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'ghost' | 'light' | 'outline-light'
  className?: string
  ariaLabel?: string
}

export function ActionButton({
  children,
  href,
  onClick,
  variant = 'solid',
  className = '',
  ariaLabel,
}: Props) {
  const styles = {
    solid:
      'bg-espresso text-ivory hover:bg-charcoal',
    ghost:
      'bg-transparent text-espresso border border-espresso/20 hover:border-espresso/50',
    light:
      'bg-ivory text-espresso hover:bg-beige',
    'outline-light':
      'bg-transparent text-ivory border border-ivory/25 hover:border-ivory/70',
  }[variant]

  const shared = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300 ${styles} ${className}`

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={shared}
        aria-label={ariaLabel}
        {...(external
          ? { target: '_blank', rel: 'noreferrer noopener' }
          : {})}
      >
        {children}
      </a>
    )
  }

  if (!onClick) {
    return (
      <span
        className={`${shared} cursor-default opacity-80`}
        aria-disabled="true"
        title="Add this link in src/content/profile.ts"
      >
        {children}
      </span>
    )
  }

  return (
    <button type="button" onClick={onClick} className={shared} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
