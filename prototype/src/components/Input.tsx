import { InputHTMLAttributes, forwardRef } from 'react'

type InputSize = 'small' | 'medium' | 'large'
type InputVariant = 'text' | 'email' | 'number' | 'password' | 'search'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  size?: InputSize
  variant?: InputVariant
  label?: string
  helperText?: string
  error?: boolean
  icon?: string
  trailingIcon?: string
  clearButton?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      size = 'medium',
      variant = 'text',
      label,
      helperText,
      error = false,
      icon,
      trailingIcon,
      clearButton,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    const baseClass = 'fox-input'
    const sizeClass = size !== 'medium' ? `fox-input--${size}` : ''
    const errorClass = error ? 'fox-input--error' : ''

    return (
      <div className={`fox-input-wrapper ${errorClass}`}>
        {label && (
          <label htmlFor={inputId} className="fox-input__label">
            {label}
          </label>
        )}
        <div className="fox-input__container">
          {icon && <span className="fox-input__icon fox-input__icon--leading">{icon}</span>}
          <input
            ref={ref}
            id={inputId}
            type={variant}
            className={`${baseClass} ${sizeClass} ${errorClass} ${className}`}
            aria-invalid={error}
            aria-describedby={helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {trailingIcon && (
            <span className="fox-input__icon fox-input__icon--trailing">{trailingIcon}</span>
          )}
          {clearButton && (props.value || props.defaultValue) && (
            <button
              type="button"
              className="fox-input__clear"
              onClick={() => {
                if (props.onChange) {
                  const event = {
                    target: { value: '' },
                  } as React.ChangeEvent<HTMLInputElement>
                  props.onChange(event)
                }
              }}
              aria-label="Clear input"
            >
              ✕
            </button>
          )}
        </div>
        {helperText && (
          <span id={`${inputId}-helper`} className="fox-input__helper">
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

