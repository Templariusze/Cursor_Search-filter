import { InputHTMLAttributes, forwardRef } from 'react'

type CheckboxSize = 'small' | 'medium' | 'large'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  size?: CheckboxSize
  label?: string
  indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ size = 'medium', label, indeterminate, className = '', id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`
    const baseClass = 'fox-checkbox'
    const sizeClass = size !== 'medium' ? `fox-checkbox--${size}` : ''

    return (
      <label htmlFor={checkboxId} className={`fox-checkbox-wrapper ${sizeClass}`}>
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          className={`${baseClass} ${sizeClass} ${className}`}
          data-indeterminate={indeterminate}
          {...props}
        />
        <span className="fox-checkbox__checkmark" aria-hidden="true" />
        {label && <span className="fox-checkbox__label">{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

