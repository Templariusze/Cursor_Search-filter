## MasterAgent — Orchestration Playbook (Cursor + Figma MCP)

Use this script inside Cursor chat. Follow steps top-to-bottom. Keep it simple.

### Inputs
- Figma: Select the target page/frame in the Figma desktop app before running steps.
- Optional: Provide a specific node id if you want to scope analysis (e.g., `1:2`).

### Steps

1) Capture context (Designer-first mode)
   - Run: Get high-level structure of the current Figma selection.
   - Tools: Figma MCP — Get metadata, Get design context, Get variable defs.
   - Load designer-first rules from `rules/master-rules.json` and apply them to all outputs.
   - If available: Get Code Connect map for selection.

2) Partition work
   - Extract candidate nodes for:
     - WordingAgent: text nodes
     - DesignRulesAgent: frames, components, styles (color, typography), slot composition, variables & modes

3) Delegate (pass master rules)
   - Send text node list + surrounding context to `WordingAgent` with `MASTER_RULES` (see `agents/WORDING.md`).
   - Send style, component, slot, and variables/modes info to `DesignRulesAgent` with `MASTER_RULES` (see `agents/DESIGN.md`).
   - For Make workflows, use `MakeAgent` to define variable-driven interactions (see `agents/MAKE.md`).

4) Validate with CheckAgent
   - Provide merged findings to `CheckAgent` with `MASTER_RULES`, `UX_RULES` (`rules/ux-best-practices.json`), and `ERP_RULES` (`rules/erp-rules.json`).
   - Accept/adjust/reject items based on UX heuristics and ERP constraints.

5) HandoffAgent (generate AI-to-AI handoff JSON)
   - Compile a deterministic spec using `agents/HANDOFF.md`.
   - Validate against `rules/handoff-schema.json`.
   - Save to `reports/ai-handoff/<featureId>.json`.
   - Error catalog: set `contracts.errorCatalogRef` to `rules/error-catalog.json#v1` by default.
   - Validate API errors: every `contracts.api[].errors` code (string or object.code) MUST exist in the error catalog.

6) CodeExpertAgent (optional when code changes are appropriate)
   - Provide validated findings to `CodeExpertAgent` with `MASTER_RULES`, `CODE_STANDARDS` (`rules/code-standards.json`), and `ERP_ARCH` (`rules/erp-architecture.json`).
   - Ask for minimal, safe edits directly applicable in this Cursor project.
   - If Code Connect mapping exists, keep API names consistent with slot and variable names.

7) Slots validation (explicit)
   - Identify components likely to expose slots: `Card`, `Dialog`, `PageLayout`, `ListItem`.
   - Check: presence, naming parity with code (`header`, `media`, `body`, `footer`, `actions`), sensible defaults (empty preserves layout), allowed content constraints per slot.
   - Severity: Missing required slot or broken layout when empty → High; naming mismatch → Medium.

8) Variables & Modes validation (explicit)
   - Verify modes exist for `theme` and `density` at minimum, states via variables where applicable.
   - Check for no hard-coded values; tokens/variables are applied consistently.
   - Severity: hard-coded styles in system components → High.

7) Optional specialized reviews
   - AccessibilityAgent: apply agents/ACCESSIBILITY.md with rules/a11y-rules.json (A11Y_RULES)
   - LocalizationAgent: apply agents/LOCALIZATION.md with rules/i18n-rules.json (I18N_RULES)
   - AnalyticsAgent: apply agents/ANALYTICS.md with rules/analytics-rules.json (ANALYTICS_RULES)

9) Aggregate and prioritize (designer-friendly)
   - Use severity buckets: Critical, High, Medium, Low.
   - Keep language plain and actionable. Provide 1–3 Figma steps per fix.
   - Create `reports/figma-audit.md` using the template below.

9) Remediation options (manual, simple)
   - Paste suggested copy edits into Figma.
   - Apply style fixes in Figma components/styles.

---

### Design Decision Forum (Deliberation Mode)

Use when the team needs a decision on a design direction.

1) Load `rules/discussion-rules.json` as DISCUSSION_RULES
2) Roundtable (max 2 rounds unless earlier consensus):
   - Order: Wording → Design → Accessibility → Localization → Analytics → Check → Code
   - Each agent proposes or critiques ONE minimal change; cite rules/tokens
3) CheckAgent applies tie-breakers and issues decision/rationale
4) CodeExpertAgent confirms implementability/minimal scope
5) MasterAgent writes an entry to `reports/decision-log.md`

Quick-start prompt:
```
You are MasterAgent (Deliberation Mode). Load DISCUSSION_RULES from
rules/discussion-rules.json. Orchestrate up to two rounds:
  Order: Wording, Design, Accessibility, Localization, Analytics, Check, Code.
  Each turn: 1 minimal proposal or critique citing rule/token. Keep it plain.
Stop early if CheckAgent finalizes a decision. Log to reports/decision-log.md
with Topic, Options, Decision, Rationale, and Action items.
```

---

### Helper: Fetch context via Figma MCP

Perform these three actions in Cursor (no PAT required):

1) Get metadata (structure overview)
   - Use: Figma MCP — Get metadata (no node id to use current selection, or pass a node id)

2) Get design context (node XML with names/positions/sizes)
   - Use: Figma MCP — Get design context (no node id to use current selection, or pass a node id)

3) Get variable definitions (tokens/colors/fonts etc.)
   - Use: Figma MCP — Get variable defs (no node id to use current selection)

Optional: Get screenshots for visual reference when wording/design decisions are ambiguous.

---

### Deliverable: reports/figma-audit.md (template)

```
# Figma Audit — Search&Filter

## Scope
- File: <file name / link>
- Page/Frame: <name>
- Date: <date>

## Summary
- Top issues (by severity):
  - Critical: <count>
  - High: <count>
  - Medium: <count>
  - Low: <count>

## Wording Findings
<list of issues>

## Design Findings
<list of issues>

## Recommendations (Prioritized)
1. <short actionable item>
2. <short actionable item>

## Appendix
- Style guide notes
- Design tokens used
- Node paths inspected
```

---

### Minimal priorities (default)
- Critical: contrast fails WCAG AA; misleading copy; inaccessible controls
- High: inconsistent component variants; off-scale typography; blocking clarity
- Medium: spacing rhythm off; inconsistent labels
- Low: microcopy polish; small visual inconsistencies

---

### Quick start prompt (paste in Cursor to kick off)

```
You are MasterAgent. Use Figma MCP. Steps:
1) Get metadata and design context of the current selection. Load `rules/master-rules.json` as MASTER_RULES. Extract:
   - Text nodes (content + path) for WordingAgent
   - Frames/components + styles/variables for DesignRulesAgent
2) Load tokens from rules/tokens.json and rules/design-rules.json (summarize)
3) Delegate:
   - WordingAgent: apply agents/WORDING.md + MASTER_RULES (use prompts/style-guide.md)
   - DesignRulesAgent: apply agents/DESIGN.md + MASTER_RULES
4) CheckAgent: validate merged findings using agents/CHECK.md, rules/ux-best-practices.json (UX_RULES), rules/erp-rules.json (ERP_RULES)
5) HandoffAgent: compile AI handoff JSON using agents/HANDOFF.md; set contracts.errorCatalogRef=rules/error-catalog.json#v1; validate against rules/handoff-schema.json; verify api error codes exist in the catalog; save to reports/ai-handoff/<featureId>.json
6) CodeExpertAgent: propose minimal safe edits using agents/CODE.md, rules/code-standards.json (CODE_STANDARDS), rules/erp-architecture.json (ERP_ARCH)
7) (Optional) AccessibilityAgent, LocalizationAgent, AnalyticsAgent using their agent files and rules
8) Aggregate findings, prioritize, and draft reports/figma-audit.md (include Code Changes and specialized sections)
9) Show the final report to copy into the repo
```


