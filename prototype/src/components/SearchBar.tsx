type Props = {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder }: Props) {
  return (
    <div className="searchbar">
      <label className="visually-hidden" htmlFor="search-input">Search</label>
      <input
        id="search-input"
        className="searchbar__input"
        type="search"
        role="searchbox"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search cards"
      />
    </div>
  )
}


