type Props = {
  label: string
  active?: boolean
  onToggle?: () => void
}

export function FilterChip({ label, active, onToggle }: Props) {
  return (
    <button
      type="button"
      className={`chip ${active ? 'chip--active' : ''}`}
      aria-pressed={Boolean(active)}
      onClick={onToggle}
    >
      {label}
    </button>
  )
}


