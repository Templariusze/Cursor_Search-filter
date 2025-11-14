import { InputHTMLAttributes, forwardRef } from 'react'

type SwitchSize = 'small' | 'medium' | 'large'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  size?: SwitchSize
  label?: string
}

export const Switch = forwardRef<HTMLInputElement, Props>(
  ({ size = 'medium', label, className = '', id, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`
    const baseClass = 'fox-switch'
    const sizeClass = size !== 'medium' ? `fox-switch--${size}` : ''

    return (
      <label htmlFor={switchId} className={`fox-switch-wrapper ${sizeClass}`}>
        <input
          ref={ref}
          id={switchId}
          type="checkbox"
          role="switch"
          className={`${baseClass} ${sizeClass} ${className}`}
          {...props}
        />
        <span className="fox-switch__slider" aria-hidden="true" />
        {label && <span className="fox-switch__label">{label}</span>}
      </label>
    )
  }
)

Switch.displayName = 'Switch'

