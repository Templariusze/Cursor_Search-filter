import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'filled' | 'outlined' | 'elevated'
type ButtonSize = 'small' | 'medium' | 'large'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  trailingIcon?: boolean
}

export function Button({
  variant = 'secondary',
  size = 'medium',
  icon,
  trailingIcon,
  children,
  className = '',
  disabled,
  ...props
}: Props) {
  const baseClass = 'fox-button'
  const variantClass = `fox-button--${variant}`
  const sizeClass = `fox-button--${size}`
  const iconClass = icon ? 'fox-button--with-icon' : ''
  const trailingClass = trailingIcon ? 'fox-button--trailing-icon' : ''

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${iconClass} ${trailingClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && !trailingIcon && <span className="fox-button__icon">{icon}</span>}
      {children && <span className="fox-button__label">{children}</span>}
      {icon && trailingIcon && <span className="fox-button__icon">{icon}</span>}
    </button>
  )
}

