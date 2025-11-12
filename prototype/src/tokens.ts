// Runtime token application: resolves values from rules/tokens.json and sets CSS variables
// across colors, spacing, radii, typography, and effects.

// Import the merged tokens file from the repo root
// Note: tsconfig enables resolveJsonModule
// The path goes: src -> prototype -> project root -> rules/tokens.json
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TOKENS from '../../rules/tokens.json'

type Json = Record<string, any>

function get<T = unknown>(obj: Json, path: string[]): T | undefined {
  let cur: any = obj
  for (const key of path) {
    if (cur == null) return undefined
    cur = cur[key]
  }
  return cur as T
}

function resolveColor(tokenRef: string, library: Json): string | undefined {
  if (!tokenRef.startsWith('fox/')) return tokenRef
  const parts = tokenRef.split('/')
  // Examples:
  // fox/secondary/white -> library.colors.secondary.white
  // fox/secondary/900 -> library.colors.secondary["900"]
  // fox/primary/base/500 -> library.colors.primary.themes.base["500"]
  // fox/error/500 -> library.colors.error["500"]
  if (parts[1] === 'secondary') {
    return get(library, ['colors', 'secondary', parts[2]])
  }
  if (parts[1] === 'primary') {
    const theme = parts[2]
    const shade = parts[3]
    return get(library, ['colors', 'primary', 'themes', theme, shade])
  }
  if (['error', 'success', 'warning', 'brand'].includes(parts[1])) {
    return get(library, ['colors', parts[1], parts[2]])
  }
  return undefined
}

function resolveShadow(tokenRef: string, library: Json): string | undefined {
  return get(library, ['effects', 'foxVariables', tokenRef, 'value'])
}

function resolveSpacing(tokenRef: string, library: Json): string | number | undefined {
  // tokenRef examples from rules: fox-space-0, fox-space-1, fox-space-base, fox-space-3
  const sizesRef = get<string>(library, ['spacing', 'foxVariables', tokenRef])
  if (!sizesRef) return undefined
  // sizesRef example: "fox-sizes-4" -> map to sizes["4"]
  const sizeKey = sizesRef.replace('fox-sizes-', '')
  const value = get<string>(library, ['sizes', sizeKey])
  return value
}

export type ApplyThemeOptions = {
  root?: HTMLElement
}

export function applyTheme(options: ApplyThemeOptions = {}): void {
  const root = options.root ?? document.documentElement
  const tokens: Json = TOKENS
  const lib = tokens.library as Json
  const rules = tokens.rules as Json

  // Colors
  const colors: Record<string, string | undefined> = {
    background: resolveColor(rules.colors.background, lib),
    textPrimary: resolveColor(rules.colors.textPrimary, lib),
    textSecondary: resolveColor(rules.colors.textSecondary, lib),
    border: resolveColor(rules.colors.border, lib),
    brandPrimary: resolveColor(rules.colors.brandPrimary, lib),
    error: resolveColor(rules.colors.error, lib),
    warning: resolveColor(rules.colors.warning, lib),
    success: resolveColor(rules.colors.success, lib),
  }
  for (const [k, v] of Object.entries(colors)) {
    if (v) root.style.setProperty(`--color-${k}`, String(v))
  }

  // Typography
  root.style.setProperty('--font-family', String(rules.typography.fontFamily))
  root.style.setProperty('--line-height-body', String(rules.typography.lineHeight.body))
  root.style.setProperty('--line-height-heading', String(rules.typography.lineHeight.heading))

  // Radii
  root.style.setProperty('--radius-sm', `${rules.radii.sm}px`)
  root.style.setProperty('--radius-md', `${rules.radii.md}px`)
  root.style.setProperty('--radius-lg', `${rules.radii.lg}px`)

  // Spacing scale and mapping
  const spacingMap = rules.spacing.foxMapping as Record<string, string>
  for (const [key, foxRef] of Object.entries(spacingMap)) {
    const v = resolveSpacing(foxRef, lib)
    if (v != null) root.style.setProperty(`--space-${key}`, String(v))
  }

  // Effects (shadows)
  const shadow1 = resolveShadow(rules.effects.elevationShadow1, lib)
  const shadow2 = resolveShadow(rules.effects.elevationShadow2, lib)
  const shadow3 = resolveShadow(rules.effects.elevationShadow3, lib)
  if (shadow1) root.style.setProperty('--shadow-1', shadow1)
  if (shadow2) root.style.setProperty('--shadow-2', shadow2)
  if (shadow3) root.style.setProperty('--shadow-3', shadow3)
}


