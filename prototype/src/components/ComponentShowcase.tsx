import { useState } from 'react'
import { Button } from './Button'
import { Badge } from './Badge'
import { Input } from './Input'
import { Checkbox } from './Checkbox'
import { Switch } from './Switch'
import { FilterChip } from './FilterChip'
import { SearchBar } from './SearchBar'

export function ComponentShowcase() {
  const [searchValue, setSearchValue] = useState('')
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [chipActive, setChipActive] = useState(false)

  return (
    <div className="showcase">
      <header className="showcase__header">
        <h1 className="showcase__title">FOX Design System Components</h1>
        <p className="showcase__subtitle">Component library preview from Chromatic export</p>
      </header>

      <div className="showcase__content">
        {/* Buttons Section */}
        <section className="showcase__section">
          <h2 className="showcase__section-title">Buttons</h2>
          <div className="showcase__grid">
            <div className="showcase__item">
              <h3>Primary</h3>
              <div className="showcase__examples">
                <Button variant="primary">Primary Button</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
                <Button variant="primary" size="small">
                  Small
                </Button>
                <Button variant="primary" size="large">
                  Large
                </Button>
              </div>
            </div>
            <div className="showcase__item">
              <h3>Secondary</h3>
              <div className="showcase__examples">
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
              </div>
            </div>
            <div className="showcase__item">
              <h3>Outlined</h3>
              <div className="showcase__examples">
                <Button variant="outlined">Outlined Button</Button>
                <Button variant="outlined" disabled>
                  Disabled
                </Button>
              </div>
            </div>
            <div className="showcase__item">
              <h3>Filled</h3>
              <div className="showcase__examples">
                <Button variant="filled">Filled Button</Button>
                <Button variant="filled" disabled>
                  Disabled
                </Button>
              </div>
            </div>
            <div className="showcase__item">
              <h3>Elevated</h3>
              <div className="showcase__examples">
                <Button variant="elevated">Elevated Button</Button>
                <Button variant="elevated" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="showcase__section">
          <h2 className="showcase__section-title">Badges</h2>
          <div className="showcase__grid">
            <div className="showcase__item">
              <h3>Status Badges</h3>
              <div className="showcase__examples">
                <Badge status="neutral" label="Neutral" />
                <Badge status="info" label="Info" />
                <Badge status="success" label="Success" />
                <Badge status="warning" label="Warning" />
                <Badge status="error" label="Error" />
              </div>
            </div>
            <div className="showcase__item">
              <h3>Variants</h3>
              <div className="showcase__examples">
                <Badge variant="primary" label="Primary" />
                <Badge variant="outlined" label="Outlined" />
                <Badge variant="small" label="Small" />
                <Badge count={5} />
                <Badge count={99} />
              </div>
            </div>
            <div className="showcase__item">
              <h3>Interactive</h3>
              <div className="showcase__examples">
                <Badge interactive label="Clickable Badge" />
                <Badge interactive disabled label="Disabled" />
              </div>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="showcase__section">
          <h2 className="showcase__section-title">Inputs</h2>
          <div className="showcase__grid">
            <div className="showcase__item">
              <h3>Text Input</h3>
              <div className="showcase__examples">
                <Input label="Label" placeholder="Enter text..." />
                <Input label="With Helper Text" helperText="This is helper text" />
                <Input label="Error State" error helperText="This field has an error" />
                <Input label="Disabled" disabled value="Disabled input" />
              </div>
            </div>
            <div className="showcase__item">
              <h3>Sizes</h3>
              <div className="showcase__examples">
                <Input size="small" placeholder="Small input" />
                <Input placeholder="Medium input (default)" />
                <Input size="large" placeholder="Large input" />
              </div>
            </div>
            <div className="showcase__item">
              <h3>Search Input</h3>
              <div className="showcase__examples">
                <SearchBar
                  value={searchValue}
                  onChange={setSearchValue}
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Form Controls Section */}
        <section className="showcase__section">
          <h2 className="showcase__section-title">Form Controls</h2>
          <div className="showcase__grid">
            <div className="showcase__item">
              <h3>Checkboxes</h3>
              <div className="showcase__examples">
                <Checkbox label="Checkbox option" checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e.target.checked)} />
                <Checkbox label="Small checkbox" size="small" />
                <Checkbox label="Large checkbox" size="large" />
                <Checkbox label="Disabled" disabled checked />
                <Checkbox label="Indeterminate" indeterminate />
              </div>
            </div>
            <div className="showcase__item">
              <h3>Switches</h3>
              <div className="showcase__examples">
                <Switch label="Toggle switch" checked={switchChecked} onChange={(e) => setSwitchChecked(e.target.checked)} />
                <Switch label="Small switch" size="small" />
                <Switch label="Large switch" size="large" />
                <Switch label="Disabled" disabled checked />
              </div>
            </div>
            <div className="showcase__item">
              <h3>Filter Chips</h3>
              <div className="showcase__examples">
                <FilterChip label="Filter 1" active={chipActive} onToggle={() => setChipActive(!chipActive)} />
                <FilterChip label="Filter 2" active />
                <FilterChip label="Filter 3" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

