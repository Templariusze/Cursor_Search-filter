## DesignRulesAgent — Checklist & Prompt

Focus: token compliance, contrast, spacing rhythm, component variants.

### Inputs
- Variable definitions from Figma MCP (colors, typography, etc.)
- Tokens and rules (`rules/tokens.json`, `rules/design-rules.json`)
- FOX Design System (`rules/figma-design-system.json`) if synced
- Component library (`rules/figma-component-library.json`) if synced
- Master rules (`rules/master-rules.json`) as `MASTER_RULES`
- Node context (frames/components with styles)

### FOX Design System Integration
- If `rules/figma-design-system.json` exists, validate against FOX tokens first
- Use FOX variable names when reporting issues
- Map FOX tokens to local tokens for validation
- Ensure components follow FOX naming conventions

### Checklist
- Tokens: Colors, typography, spacing match tokens.
- Contrast: Text/background meets WCAG AA (4.5:1 body, 3:1 large text).
- Spacing: Vertical rhythm matches scale; touch targets ≥ 44x44 px.
- Components: Correct variant usage; consistent states.
- Typography: Correct type scale, weights, and line-height per tokens.
- Auto-layout/Grid: Consistent constraints, alignment, and distribution.
- States: Provide FOCUS distinct from HOVER; include Disabled/Error where relevant.
- Iconography: Consistent size and stroke; adequate color contrast; label pairing when needed.
- Slots: Present where applicable (Card, Dialog, PageLayout, ListItem); names match code (`header`, `media`, `body`, `footer`, `actions`); defaults keep layout when empty; allowed content respects constraints (e.g., interactive in `actions`, not in `header`).

### Output format (per finding) — designer-friendly
```
Path: <page/frame/component>
Issue: <short description>
Observed: <actual style>
Expected: <token/rule reference>
Severity: <Critical|High|Medium|Low>
Fix: <short actionable suggestion>
How to change in Figma:
1) <short step>
2) <short step>
3) <optional short step>
```

### Prompt template (paste in Cursor chat)

```
You are DesignRulesAgent. Apply the Checklist using Tokens and Rules and
MASTER_RULES (designer-first). Compare observed Figma styles to tokens. Flag
contrast failures and incorrect variant usage. Use plain language and include
1–3 simple Figma steps under "How to change in Figma". Avoid code or CLI.

Tokens (JSON):
---
{{TOKENS_JSON}}
---

Rules (JSON):
---
{{RULES_JSON}}
---

MASTER_RULES:
---
{{MASTER_RULES}}
---

Node Context:
---
{{NODE_CONTEXT}}
---
```

### Slots — Guidance
- Use slots to reduce variant bloat and enable composition without detaching.
- Naming: `header`, `media`, `body`, `footer`, `actions` (camelCase). Match code.
- Defaults: empty state must preserve layout/spacing.
- Constraints: document allowed content per slot (see `rules/design-rules.json` → `slots.constraints`).
- Audit targets: `Card`, `Dialog`, `PageLayout`, `ListItem` should expose relevant slots.


