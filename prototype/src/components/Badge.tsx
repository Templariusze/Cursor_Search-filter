import { HTMLAttributes } from 'react'

type BadgeVariant = 'primary' | 'outlined' | 'small' | 'dot'
type BadgeStatus = 'neutral' | 'info' | 'success' | 'warning' | 'error'

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
  status?: BadgeStatus
  label?: string
  count?: number
  interactive?: boolean
  disabled?: boolean
}

export function Badge({
  variant,
  status,
  label,
  count,
  interactive = false,
  disabled = false,
  className = '',
  ...props
}: Props) {
  const baseClass = 'fox-badge'
  const variantClass = variant ? `fox-badge--${variant}` : ''
  const statusClass = status ? `fox-badge--${status}` : ''
  const interactiveClass = interactive ? 'fox-badge--interactive' : ''
  const disabledClass = disabled ? 'fox-badge--disabled' : ''

  const displayText = count !== undefined ? String(count) : label || ''

  return (
    <span
      className={`${baseClass} ${variantClass} ${statusClass} ${interactiveClass} ${disabledClass} ${className}`}
      role={interactive ? 'button' : undefined}
      aria-label={label}
      {...props}
    >
      {displayText}
    </span>
  )
}

