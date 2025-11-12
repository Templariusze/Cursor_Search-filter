# FOX Design Token Library — Usage Guide

## Overview

The FOX Design Token Library (`rules/fox-token-library.json`) contains all tokens from the FOX Design System extracted from CSS variables. This library can be reused across all designs.

## Structure

### Primary Colors (10 Themes)

FOX supports multiple primary color themes that can be switched per client/brand:

- **base** (default): Blue theme `#0a70eb`
- **moss**: Green theme `#577560`
- **chocolate**: Brown theme `#86594b`
- **raspberry**: Pink theme `#9f3d75`
- **ocean**: Teal theme `#3d758f`
- **stone**: Gray theme `#556d72`
- **forrest**: Forest green theme `#667430`
- **sand**: Beige theme `#6d6855`
- **amber**: Amber theme `#80692b`
- **lavender**: Purple theme `#80529d`
- **magma**: Red theme `#a35b58`

Each theme includes:
- Shades: 100-900
- Highlight colors: highlight-1, highlight-2
- Opacity variants: opacity-10, opacity-20, opacity-40, opacity-60, opacity-80

### Semantic Colors

**Brand Colors:**
- Brand yellow: `#ffc933` (fox-brand-color-500)

**Secondary Colors:**
- Neutral grays: 100-900 + black/white
- Opacity variants for overlays

**Status Colors:**
- Error: Red scale (100-900)
- Success: Green scale (100-900)
- Warning: Yellow scale (100-900)

### Semantic Color Tokens

Component-level tokens organized by:
- **Border**: Primary, secondary, status colors with states (default, focus, hover, press, select)
- **Fill**: Background colors with states
- **Text**: Text colors with states and variants (subtle, highlight)
- **Icon**: Icon colors with states
- **Surface**: Surface/background colors

**Modes:**
- Light mode (default)
- Dark mode
- High contrast mode

### Typography

- **Font Family**: Rubik
- **Font Weights**: Regular, Medium (bold uses Medium)
- **Font Sizes**: 1 (10px) through 8 (30px)
- **Line Height**: 1.25 (body and headings)

### Spacing

- **Scale**: 0, 4, 8, 12, 16, 20, 24, 32, 40, 44, 48px
- **Variables**: `fox-space-0` through `fox-space-7`

### Sizes

Base size tokens: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48px

### Icons

Icon sizes: 1 (12px) through 5 (48px), base: 24px

## Usage in Designs

### 1. Using Primary Colors

**Select a theme:**
- Default: Use `fox-primary-color-500` (uses base theme)
- Switch theme: Change CSS variable assignment to use different theme

**Example:**
```css
/* Base theme (default) */
--fox-primary-color-500: var(--fox-primary-base-color-500); /* #0a70eb */

/* Moss theme */
--fox-primary-color-500: var(--fox-primary-moss-color-500); /* #577560 */
```

### 2. Using Semantic Tokens

**For component states:**
```
fox-color-border-primary-default
fox-color-border-primary-hover
fox-color-border-primary-focus
fox-color-fill-primary-default
fox-color-text-secondary-default
```

### 3. Using Spacing

**In Figma:**
- Use `fox-space-1` (4px) for tight spacing
- Use `fox-space-base` (8px) for standard spacing
- Use `fox-space-4` (16px) for medium spacing
- Use `fox-space-6` (24px) for large spacing

### 4. Using Typography

**Text styles:**
- `fox-font-size-base` (12px) - Base body text
- `fox-font-size-3` (14px) - Large body text
- `fox-font-size-4` (16px) - Standard text
- `fox-font-size-7` (24px) - Headings

## Integration with DesignRulesAgent

The DesignRulesAgent automatically uses this library to:
- ✅ Validate colors against FOX tokens
- ✅ Check spacing against FOX scale
- ✅ Verify typography matches FOX scale
- ✅ Ensure components use semantic color tokens

## File Reference

**Main Library:** `rules/fox-token-library.json`  
**Mapped Tokens:** `rules/tokens.json` (simplified mapping)  
**FOX Reference:** `rules/figma-design-system.json`

## Quick Reference

**Common Colors:**
- Primary: `fox-primary-color-500` (theme-dependent)
- Secondary: `fox-secondary-color-300` (borders)
- Text Primary: `fox-secondary-color-900` (dark text)
- Text Secondary: `fox-secondary-color-700` (subtle text)
- Background: `fox-secondary-color-white`
- Error: `fox-error-color-500`
- Success: `fox-success-color-500`
- Warning: `fox-warning-color-500`

**Common Spacing:**
- `fox-space-1` = 4px
- `fox-space-base` = 8px
- `fox-space-3` = 12px
- `fox-space-4` = 16px
- `fox-space-6` = 24px

**Common Typography:**
- Base: 12px (fox-font-size-2/base)
- Large: 14px (fox-font-size-3)
- Standard: 16px (fox-font-size-4)
- Heading: 24px (fox-font-size-7)

## Future Designs

When creating new designs:
1. Reference `rules/fox-token-library.json` for available tokens
2. Use semantic color tokens (`fox-color-*`) for component states
3. Use spacing scale (`fox-space-*`) for consistent layouts
4. Use typography scale (`fox-font-size-*`) for text
5. DesignRulesAgent will automatically validate against FOX tokens

## Updating the Library

When FOX tokens change:
1. Update CSS variables in source
2. Extract new tokens
3. Update `rules/fox-token-library.json`
4. Run sync to update mapped tokens

**Library is ready for reuse across all designs!** 🎨


