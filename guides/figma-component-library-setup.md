# Figma Component Library Guide

## Overview
This guide helps you create a reusable component library in Figma that integrates with your design tokens and works seamlessly with your multi-agent workflow.

## Step 1: Organize Your Figma File Structure

### Recommended Page Structure
Create separate pages in your Figma file:

```
📄 Design System
├── 📄 🎨 Tokens & Variables
│   ├── Colors (Modes: Light/Dark)
│   ├── Typography
│   ├── Spacing
│   └── Effects (Shadows, Borders)
│
├── 📄 🧩 Components
│   ├── Primitives (Buttons, Inputs, Icons)
│   ├── Forms (Input Groups, Dropdowns, Checkboxes)
│   ├── Navigation (Tabs, Breadcrumbs, Menus)
│   ├── Feedback (Alerts, Toasts, Modals)
│   ├── Data Display (Tables, Cards, Lists)
│   └── Layout (Containers, Grids, Spacers)
│
├── 📄 📋 Patterns
│   ├── Search & Filter
│   ├── Data Entry
│   ├── Lists & Tables
│   └── Workflows
│
└── 📄 🧪 Playground
    └── Component Testing & Variations
```

## Step 2: Set Up Design Tokens as Variables

### Color Variables
1. Open Figma → **Right sidebar → Variables**
2. Create variable modes:
   - Light mode
   - Dark mode (if needed)
3. Create color variables that match your `tokens.json`:
   - `background` → `#FFFFFF`
   - `textPrimary` → `#111111`
   - `textSecondary` → `#555555`
   - `brandPrimary` → `#3B82F6`
   - `error` → `#DC2626`
   - `warning` → `#D97706`
   - `success` → `#16A34A`

### Typography Variables
1. Create text styles for each typography scale:
   - `body/base` → 14px, Regular, 1.5 line-height
   - `body/large` → 16px, Regular, 1.5 line-height
   - `heading/small` → 18px, Regular, 1.25 line-height
   - `heading/medium` → 24px, Regular, 1.25 line-height
   - Continue for all sizes in your scale [12, 14, 16, 18, 20, 24, 32, 40]

2. **How to create text styles:**
   - Select text → Right sidebar → Text → Click **...** → **Create style**
   - Name: `Body/Base` or `Heading/Small` (use forward slash for grouping)

### Spacing Variables
1. Create variables for spacing scale [4, 8, 12, 16, 20, 24, 32]:
   - `spacing/xs` → 4px
   - `spacing/sm` → 8px
   - `spacing/base` → 12px
   - `spacing/md` → 16px
   - `spacing/lg` → 20px
   - `spacing/xl` → 24px
   - `spacing/2xl` → 32px

2. **How to use:** In auto-layout, use variables in gap/padding fields

### Radius Variables
1. Create variables for border radius:
   - `radius/sm` → 4px
   - `radius/md` → 8px
   - `radius/lg` → 12px

## Step 3: Create Component Structure

### Component Naming Convention
Use this format: `ComponentName/Variant/State`

Examples:
- `Button/Primary/Default`
- `Button/Primary/Hover`
- `Button/Primary/Disabled`
- `Input/Text/Default`
- `Input/Text/Error`
- `Dropdown/Single/Open`

### Component Organization
1. **Create a Component Set** (for variants):
   - Select your component → Right-click → **Create component set**
   - Use property names: `Variant`, `State`, `Size`, etc.

2. **Component Properties to Set:**
   - **Variant Property**: `Primary`, `Secondary`, `Danger` (matches `design-rules.json`)
   - **State Property**: `Default`, `Hover`, `Active`, `Disabled`, `Loading`
   - **Size Property** (if applicable): `Small`, `Medium`, `Large`

## Step 4: Link Components to Tokens

### For Each Component:

1. **Colors:**
   - Select element → Fill → Click color → Use **Variables** tab
   - Link to your color variables (not hex values)

2. **Typography:**
   - Select text → Apply text style (not manual font settings)

3. **Spacing:**
   - Use auto-layout with variables in gap/padding
   - Or create spacing components (e.g., `Spacer/4px`, `Spacer/8px`)

4. **Border Radius:**
   - Select element → Corner radius → Use variable or set to token value

## Step 5: Component Specifications

### Required Components (Based on Your Design Rules)

#### Button Component
- **Variants:** `Primary`, `Secondary`, `Danger` (per `design-rules.json`)
- **States:** `Default`, `Hover`, `Active`, `Disabled`, `Focus`
- **Minimum Height:** 44px (per accessibility rules)
- **Properties:**
  - Uses `brandPrimary` variable for primary
  - Uses `textPrimary` or `textSecondary` variables
  - Uses `radius/sm` (4px) for border radius
  - Text uses `Body/Base` or `Body/Large` style

#### Input Component
- **Variants:** `Text`, `Email`, `Number`, `Password`, `Search`
- **States:** `Default`, `Focus`, `Error`, `Disabled`, `Placeholder`
- **Minimum Height:** 44px (per accessibility rules)
- **Properties:**
  - Border uses `textSecondary` or neutral color variable
  - Error state uses `error` variable
  - Placeholder uses `textSecondary` variable
  - Uses `radius/sm` (4px) for border radius

#### Dropdown/Select Component
- **Variants:** `Single`, `Multiple`
- **States:** `Default`, `Open`, `Focus`, `Disabled`
- **Minimum Height:** 44px
- **Properties:**
  - Same styling as Input
  - Chevron icon aligned to tokens

## Step 6: Document Components

### Create Component Documentation Frame

For each component, create a documentation frame with:

1. **Component Name & Description**
2. **Variants & States** (visual grid)
3. **Token Usage Table:**
   - Color: `brandPrimary`
   - Typography: `Body/Base`
   - Spacing: `spacing/md` (16px)
   - Radius: `radius/sm` (4px)
4. **Specifications:**
   - Minimum height: 44px
   - Accessibility: WCAG AA contrast
   - Keyboard navigation: Tab, Enter, Escape
5. **Usage Examples**
6. **Do's and Don'ts**

## Step 7: Component Status & Versioning

### Use Component Properties for Metadata

Add description fields to components:
- **Status:** `Stable`, `Beta`, `Deprecated`
- **Version:** `1.0.0`
- **Last Updated:** Date
- **Usage Notes:** Quick reference

### How to Add Description:
1. Select component → Right sidebar → Click **...** next to component name
2. Select **Component details**
3. Add description and tags

## Step 8: Create Component Catalog

Create a master catalog page that lists all components with:
- Component name
- Link to component (clickable)
- Variants available
- Status (Stable/Beta/Deprecated)
- Related tokens

## Step 9: Integration with Your Multi-Agent Workflow

### For DesignRulesAgent
- Components should use variables (not hardcoded values)
- Components should match `design-rules.json` variants
- Components should meet accessibility requirements

### For HandoffAgent
- Components should have clear names matching your naming convention
- Component properties should be documented
- States should be clearly defined

### How to Export Component Specs
1. Use Figma's **Inspect** mode to generate specs
2. Components with variables will show variable names (not values)
3. This helps agents understand token usage

## Step 10: Component Testing Checklist

Before marking a component as "Stable":

- [ ] Uses design tokens (variables) for all colors, typography, spacing
- [ ] Meets minimum touch target (44px height)
- [ ] Has all required states (Default, Hover, Active, Disabled, Focus)
- [ ] Meets WCAG AA contrast requirements
- [ ] Has keyboard navigation states visible
- [ ] Naming follows convention (`Component/Variant/State`)
- [ ] Documented with usage examples
- [ ] Tested in light/dark mode (if applicable)
- [ ] Works with auto-layout and constraints
- [ ] Properties are set correctly (variants, states)

## Quick Reference: Creating Your First Component

### Example: Button Component

1. **Create Base:**
   - Draw rectangle: 120px × 44px
   - Fill: Link to `brandPrimary` variable
   - Border radius: Link to `radius/sm` variable (4px)
   - Add text: "Button" using `Body/Base` text style

2. **Create Component Set:**
   - Select rectangle → Right-click → **Create component set**
   - Add variant property: `Variant` → `Primary`, `Secondary`, `Danger`
   - Add state property: `State` → `Default`, `Hover`, `Disabled`

3. **Apply Variants:**
   - Primary: `brandPrimary` color
   - Secondary: `textSecondary` color or outline
   - Danger: `error` color

4. **Apply States:**
   - Default: Normal appearance
   - Hover: Slightly darker/lighter
   - Disabled: Reduced opacity + `textSecondary` color

5. **Add to Library:**
   - Right-click component → **Publish to team library** (if team)
   - Or keep in local file

6. **Document:**
   - Create documentation frame
   - List token usage
   - Add usage examples

## Best Practices

1. **Always use variables** - Never hardcode colors, spacing, or typography
2. **Create variants systematically** - Follow your `design-rules.json` allowed variants
3. **Test accessibility** - Use Figma's contrast checker
4. **Document everything** - Create documentation frames for each component
5. **Keep it organized** - Use consistent naming and page structure
6. **Version control** - Mark deprecated components clearly
7. **Update tokens first** - Change tokens, not individual components

## Troubleshooting

**Q: How do I see what variables a component uses?**
- Select component → Right sidebar → Any property using a variable shows the variable name in blue

**Q: How do I update all components when a token changes?**
- Update the variable in Variables panel → All components using it update automatically

**Q: How do I export component specs for developers?**
- Use Figma's Inspect panel or generate specs with Figma's API
- Your HandoffAgent can read component details via Figma MCP

**Q: How do I handle component variants that don't match design-rules.json?**
- Either update `design-rules.json` to include the variant, or mark the component as "Custom" and document why

