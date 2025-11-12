# Component Catalog Template

Use this template to track your component library. Update as you create new components.

## Component Status Legend
- ✅ **Stable** - Production-ready, fully documented
- 🔄 **Beta** - In development, usable but may change
- ⚠️ **Deprecated** - Being phased out, don't use in new designs
- 📝 **Planned** - Not yet created

## Primitives

### Button
- **Status:** ✅ Stable
- **Variants:** Primary, Secondary, Danger
- **States:** Default, Hover, Active, Disabled, Focus
- **Min Height:** 44px
- **Tokens:** `brandPrimary`, `Body/Base`, `radius/sm`, `spacing/md`
- **Figma Node ID:** (update when created)
- **Documentation:** [Link to doc frame]
 - **Variables/Modes:** theme, density
 - **Code Connect:** `src/components/Button.tsx`

### Input
- **Status:** ✅ Stable
- **Variants:** Text, Email, Number, Password, Search
- **States:** Default, Focus, Error, Disabled
- **Min Height:** 44px
- **Tokens:** `textSecondary`, `error`, `Body/Base`, `radius/sm`
- **Figma Node ID:** (update when created)
- **Documentation:** [Link to doc frame]
 - **Variables/Modes:** theme, density, state
 - **Code Connect:** `src/components/Input.tsx`

### Dropdown/Select
- **Status:** ✅ Stable
- **Variants:** Single, Multiple
- **States:** Default, Open, Focus, Disabled
- **Min Height:** 44px
- **Tokens:** `textSecondary`, `Body/Base`, `radius/sm`
- **Figma Node ID:** (update when created)
- **Documentation:** [Link to doc frame]

### Checkbox
- **Status:** 📝 Planned
- **Variants:** Default, Indeterminate
- **States:** Default, Checked, Disabled, Focus
- **Min Height:** 44px (touch target)
- **Tokens:** `brandPrimary`, `radius/sm`
- **Figma Node ID:** (update when created)

### Radio Button
- **Status:** 📝 Planned
- **Variants:** Default
- **States:** Default, Selected, Disabled, Focus
- **Min Height:** 44px (touch target)
- **Tokens:** `brandPrimary`
- **Figma Node ID:** (update when created)

### Toggle Switch
- **Status:** ✅ Stable (from Search&Filter design)
- **Variants:** Default
- **States:** On, Off, Disabled, Focus
- **Min Height:** 44px (touch target)
- **Tokens:** `brandPrimary`, `textSecondary`
- **Figma Node ID:** (update when created)

### Icon
- **Status:** ✅ Stable
- **Variants:** 16px, 24px, 32px
- **States:** Default, Active, Disabled
- **Tokens:** `textPrimary`, `textSecondary`, `brandPrimary`
- **Figma Node ID:** (update when created)

## Forms

### Input Group
- **Status:** 📝 Planned
- **Variants:** With Label, With Helper Text, With Error
- **States:** Default, Focus, Error
- **Tokens:** `Body/Base`, `spacing/md`
- **Figma Node ID:** (update when created)

### Form Field
- **Status:** 📝 Planned
- **Variants:** Required, Optional, Error
- **States:** Default, Focus, Error
- **Tokens:** `Body/Base`, `error`, `spacing/md`
- **Figma Node ID:** (update when created)

### Search Bar
- **Status:** ✅ Stable (from Search&Filter design)
- **Variants:** Default
- **States:** Default, Focus, With Results
- **Min Height:** 44px
- **Tokens:** `textSecondary`, `Body/Base`, `radius/sm`
- **Figma Node ID:** 180:10799
- **Notes:** Component from Search&Filter design audit

## Navigation

### Tabs
- **Status:** 📝 Planned
- **Variants:** Horizontal, Vertical
- **States:** Default, Active, Disabled, Focus
- **Tokens:** `brandPrimary`, `Body/Base`, `spacing/md`
- **Figma Node ID:** (update when created)

### Breadcrumbs
- **Status:** 📝 Planned
- **Variants:** Default
- **States:** Default, Hover, Active
- **Tokens:** `Body/Base`, `brandPrimary`, `textSecondary`
- **Figma Node ID:** (update when created)

### Menu
- **Status:** 📝 Planned
- **Variants:** Dropdown, Context
- **States:** Default, Open, Hover, Active
- **Tokens:** `Body/Base`, `spacing/md`, `radius/sm`
- **Figma Node ID:** (update when created)

## Feedback

### Alert
- **Status:** 📝 Planned
- **Variants:** Success, Error, Warning, Info
- **States:** Default, Dismissible
- **Tokens:** `success`, `error`, `warning`, `Body/Base`, `radius/sm`
- **Figma Node ID:** (update when created)

### Toast
- **Status:** 📝 Planned
- **Variants:** Success, Error, Warning, Info
- **States:** Default, Dismissible
- **Tokens:** `success`, `error`, `warning`, `Body/Base`, `radius/md`
- **Figma Node ID:** (update when created)

### Modal
- **Status:** 📝 Planned
- **Variants:** Default, Confirmation
- **States:** Default, Open, Closing
- **Tokens:** `background`, `radius/lg`, `spacing/xl`
- **Figma Node ID:** (update when created)

## Data Display

### Table
- **Status:** 📝 Planned
- **Variants:** Default, Sortable, Selectable
- **States:** Default, Hover, Selected, Loading
- **Tokens:** `Body/Base`, `spacing/md`, `textSecondary`
- **Figma Node ID:** (update when created)

### Card
- **Status:** 📝 Planned
- **Variants:** Default, Elevated, Outlined
- **States:** Default, Hover, Active
- **Tokens:** `background`, `radius/md`, `spacing/md`
- **Figma Node ID:** (update when created)
 - **Slots:** header, media, body, actions
 - **Variables/Modes:** theme, density
 - **Code Connect:** `src/components/Card.tsx`

### List Item
- **Status:** 📝 Planned
- **Variants:** Default, With Avatar, With Actions
- **States:** Default, Hover, Selected, Disabled
- **Tokens:** `Body/Base`, `spacing/md`
- **Figma Node ID:** (update when created)

### Filter Chip
- **Status:** 📝 Planned
- **Variants:** Active, Inactive
- **States:** Default, Hover, Removable
- **Tokens:** `brandPrimary`, `textPrimary`, `radius/md`
- **Figma Node ID:** (update when created)
- **Notes:** Needed for Search&Filter feature (show applied filters)

## Layout

### Container
- **Status:** 📝 Planned
- **Variants:** Default, Constrained, Full Width
- **Tokens:** `spacing/xl`, `spacing/2xl`
- **Figma Node ID:** (update when created)

### Grid
- **Status:** 📝 Planned
- **Variants:** 2 Columns, 3 Columns, 4 Columns
- **Tokens:** `spacing/md`, `spacing/lg`
- **Figma Node ID:** (update when created)

### Spacer
- **Status:** ✅ Stable
- **Variants:** 4px, 8px, 12px, 16px, 20px, 24px, 32px
- **Tokens:** `spacing/xs` through `spacing/2xl`
- **Figma Node ID:** (update when created)

## Patterns

### Search & Filter Toolbar
- **Status:** 🔄 Beta
- **Components Used:** Search Bar, Dropdown, Toggle Switch, Filter Chip
- **Figma Node ID:** 180:10799
- **Notes:** From Search&Filter design audit, needs improvements (touch targets, applied filters)

### Data Table with Filters
- **Status:** 📝 Planned
- **Components Used:** Table, Filter Chip, Dropdown
- **Figma Node ID:** (update when created)

## Component Usage Statistics

Last Updated: [Date]

- **Total Components:** [Count]
- **Stable:** [Count]
- **Beta:** [Count]
- **Deprecated:** [Count]
- **Planned:** [Count]

## Notes

- All components should use design tokens (variables) from Figma
- Components must meet 44px minimum touch target for accessibility
- Component variants must match `design-rules.json` allowed variants
- Document all components with usage examples and token references

