## SyncAgent — Figma Design System Sync Playbook

Use this agent to sync design tokens and components from your FOX Design System in Figma.

### Inputs
- Figma link: URL to design tokens/components page
- Figma MCP: Get variable definitions, get design context, get metadata
- Target files: `rules/tokens.json`, `rules/figma-design-system.json`, `rules/figma-component-library.json`

### Steps

1) **Extract from Figma**
   - Use Figma MCP to get variable definitions from the provided link
   - Extract all color variables, typography styles, spacing variables, effects
   - Get component definitions and variants
   - Capture naming conventions and structure

2) **Map FOX Tokens to Local Structure**
   - Map FOX color variables to `tokens.json` structure
   - Map FOX typography to text styles
   - Map FOX spacing to spacing scale
   - Map FOX components to component library structure

3) **Update Local Files**
   - Update `rules/tokens.json` with FOX values
   - Create/update `rules/figma-design-system.json` with complete FOX reference
   - Create/update `rules/figma-component-library.json` with component definitions
   - Preserve any custom rules/rules that don't exist in FOX

4) **Validate Sync**
   - Compare FOX tokens with local tokens
   - Flag any discrepancies
   - Report missing tokens/components
   - Document any custom tokens not in FOX

5) **Output Summary**
   - List of synced tokens
   - List of synced components
   - Any discrepancies found
   - Recommendations for alignment

### Usage

**To sync design tokens:**
```
Sync design tokens from:
@https://www.figma.com/design/HNuKSznP1b7pZWMUVidugb/FOX-Design-Tokens?node-id=9218-1556&m=dev
```

**To sync components:**
```
Sync component library from:
@https://www.figma.com/design/[file]/[page]?node-id=[id]
```

### Output Format

```
# Design System Sync Report

## Source
- Figma File: [name]
- Node ID: [id]
- Sync Date: [date]

## Tokens Synced
- Colors: [count]
- Typography: [count]
- Spacing: [count]
- Effects: [count]

## Components Synced
- [Component name]: [variants count]

## Discrepancies
- [Any differences found]

## Files Updated
- rules/tokens.json
- rules/figma-design-system.json
- rules/figma-component-library.json
```

### Preserving Custom Rules

When syncing, preserve:
- Custom validation rules in `design-rules.json`
- ERP-specific constraints in `erp-rules.json`
- Custom component requirements not in FOX

### Error Handling

- If Figma link invalid: Report error, suggest manual update
- If tokens missing: Flag missing tokens, use defaults if available
- If structure mismatch: Map what's possible, document gaps

