# FOX Design System Library — Sync Guide

## Overview
This document explains how to keep your design tokens and components synchronized with your FOX Design System in Figma.

## Two Approaches

### Approach 1: Sync from Figma Links (Recommended)
**When to use:** When you want to ensure your local library matches your Figma design system exactly.

**How it works:**
1. Paste a Figma link to your design tokens/components
2. AI will fetch the current tokens/variables/components from Figma
3. Updates `rules/tokens.json` and `rules/figma-design-system.json` automatically
4. Your agents will use the synced tokens for validation

**Example:**
```
@https://www.figma.com/design/HNuKSznP1b7pZWMUVidugb/FOX-Design-Tokens?node-id=9218-1556&m=dev
```

### Approach 2: Manual Library Maintenance
**When to use:** When you want to document tokens manually or when Figma MCP isn't available.

**How it works:**
1. Manually update `rules/tokens.json` and `rules/figma-design-system.json`
2. Reference your Figma file for the source of truth
3. Agents use the local files for validation

## Recommended Workflow

### Initial Setup
1. **Provide your FOX Design Tokens Figma link:**
   ```
   @https://www.figma.com/design/HNuKSznP1b7pZWMUVidugb/FOX-Design-Tokens?node-id=9218-1556&m=dev
   ```

2. **I'll extract and create:**
   - `rules/figma-design-system.json` - Complete FOX tokens/variables
   - Updated `rules/tokens.json` - Synced with FOX values
   - `rules/figma-component-library.json` - Component definitions from Figma

### Ongoing Sync
When tokens change in Figma:
1. Paste the updated Figma link
2. Say: "Sync design tokens from this Figma link"
3. Files will be updated automatically

## File Structure

```
rules/
├── tokens.json                    # Local tokens (synced with FOX)
├── figma-design-system.json       # Complete FOX system reference
├── figma-component-library.json   # Component library from Figma
└── design-rules.json             # Validation rules

agents/
└── SYNC.md                        # Agent for syncing from Figma
```

## How Agents Use This

### DesignRulesAgent
- Reads `rules/tokens.json` for validation
- Reads `rules/figma-design-system.json` for FOX-specific tokens
- Compares Figma designs against both files

### CheckAgent
- Uses tokens to validate ERP-specific requirements
- Ensures consistency with FOX design system

### CodeExpertAgent
- Uses tokens for code generation
- References FOX component names and variants

## Benefits of This Approach

✅ **Source of Truth:** Figma remains the single source of truth  
✅ **Agent Integration:** Agents automatically use synced tokens  
✅ **Consistency:** Designs validated against actual FOX tokens  
✅ **Flexibility:** Can sync on-demand or maintain manually  
✅ **Version Control:** Changes tracked in git  

## Next Steps

1. **Provide your FOX Design Tokens Figma link** (the one you shared)
2. **I'll extract:** All variables, tokens, and component definitions
3. **I'll create:** Synced library files ready for your agents
4. **You'll have:** Automatic validation against your FOX design system

Ready? Paste your Figma link and I'll sync everything!

