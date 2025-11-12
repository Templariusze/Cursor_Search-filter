# Design System Sync — Quick Reference

## Answer: Use Figma Links (Recommended)

**Best approach:** Paste Figma links and I'll extract the information automatically.

## How It Works

### 1. Sync Design Tokens
```
Sync design tokens from:
@https://www.figma.com/design/HNuKSznP1b7pZWMUVidugb/FOX-Design-Tokens?node-id=9218-1556&m=dev
```

**What happens:**
- I extract all color variables, typography, spacing, effects from FOX
- Update `rules/tokens.json` with FOX values
- Create `rules/figma-design-system.json` with complete FOX reference
- Your agents will automatically use FOX tokens for validation

### 2. Sync Components
```
Sync components from:
@https://www.figma.com/design/[file]/[page]?node-id=[id]
```

**What happens:**
- I extract component definitions, variants, and properties
- Create `rules/figma-component-library.json`
- Components are validated against FOX structure

### 3. Validate Designs Against FOX
```
Check this design against FOX design system:
@https://www.figma.com/design/[file]/[page]?node-id=[id]
```

**What happens:**
- I fetch the design
- Compare against synced FOX tokens and components
- Report any deviations from FOX design system
- Suggest fixes using FOX tokens/components

## Benefits

✅ **Single Source of Truth:** Figma FOX Design System remains authoritative  
✅ **Automatic Sync:** Just paste links, I handle the rest  
✅ **Agent Integration:** All agents use synced FOX tokens automatically  
✅ **Consistency:** Designs validated against actual FOX system  
✅ **No Manual Updates:** Tokens stay in sync with Figma  

## When to Sync

- **Initial Setup:** Sync once to populate library
- **After Token Changes:** Sync when FOX tokens are updated
- **After Component Updates:** Sync when new components are added
- **Before Major Audits:** Sync to ensure latest tokens are used

## File Structure

```
rules/
├── tokens.json                    # Synced with FOX (your agents use this)
├── figma-design-system.json       # Complete FOX reference
├── figma-component-library.json   # FOX components
└── design-rules.json             # Your validation rules (preserved)

guides/
└── figma-sync-guide.md           # Detailed sync instructions

agents/
└── SYNC.md                       # SyncAgent playbook
```

## Example Workflow

**Step 1: Initial Sync**
```
Sync design tokens from:
@https://www.figma.com/design/HNuKSznP1b7pZWMUVidugb/FOX-Design-Tokens?node-id=9218-1556&m=dev
```

**Step 2: Audit a Design**
```
Check this design against FOX:
@https://www.figma.com/design/ef9xzfZwT8Eb7uwRZQuxJ3/Best-Practice-Hub?node-id=180-10799&m=dev
```

**Step 3: Agents Use FOX Tokens**
- DesignRulesAgent validates against FOX tokens
- CheckAgent ensures FOX compliance
- CodeExpertAgent uses FOX component names

## Ready to Start?

**Paste your FOX Design Tokens link and I'll sync everything!**

Example:
```
@https://www.figma.com/design/HNuKSznP1b7pZWMUVidugb/FOX-Design-Tokens?node-id=9218-1556&m=dev
```

