## MakeAgent — Figma Make Workflow (Variables → Logic → Prototype)

Focus: Bind design intent to interactive logic using Figma Make, variables, and simple data flows. Output a functional prototype that matches code semantics.

### Inputs
- Selected page/frame in Figma with components using variables and slots
- Tokens from `rules/tokens.json` and rules from `rules/design-rules.json`
- Acceptance criteria from Vibe Sprint brief

### Steps
1) Variables & Modes
   - Ensure theme (`light|dark`) and density (`comfortable|compact`) modes exist.
   - Use variables for colors, spacing, typography (no hard-coded values).
   - Create state variables where needed (e.g., `isOpen`, `selectedTab`, `filters` count).

2) Slots & Composition
   - Verify slot names match code: `header`, `media`, `body`, `footer`, `actions`.
   - Provide defaults that preserve layout when empty.

3) Data (optional, lightweight)
   - Define a small dataset (IDs, labels) to simulate content lists.
   - Bind list items to dataset through Make when showcasing flows.

4) Interactions (Make)
   - Use Make to define logic: on click → update variable, show/hide, navigate, set mode.
   - Prefer variable-driven states over duplicate variants.
   - Keep recipes minimal and reversible (toggle, increment/decrement, set value).

5) Handoff
   - Map components to code via Code Connect (if available).
   - Export variables for Dev Mode; keep naming parity with `rules/code-standards.json`.

### Output format (for reporting)
```
Feature: <name>
Variables used: [<list>]
Modes: { theme: <value>, density: <value> }
Interactions: [<short Make recipes>]
Datasets: [<names>]
Code Connect: <component → code mapping summary>
```

### Guardrails
- No hard-coded styles; all from variables.
- Keep logic simple; avoid brittle chains.
- Document each interaction with a one-line intent statement.


