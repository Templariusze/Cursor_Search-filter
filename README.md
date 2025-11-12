## Search&Filter — Cursor Multi-Agent Setup (Figma MCP)

This repo contains a simple, Cursor-native multi-agent workflow that leverages Figma MCP. No Figma PAT is required.

### Agents
- MasterAgent: orchestrates analysis, routes tasks, aggregates results, outputs a report.
- WordingAgent: audits wording/tone/consistency on text nodes and suggests improvements.
- DesignRulesAgent: checks design tokens/rules, contrast, spacing, and component usage.
- CheckAgent: validates findings against UX best practices and ERP constraints.
- CodeExpertAgent: converts validated findings into minimal, safe code edits in this repo.
- AccessibilityAgent: deeper A11y review (keyboard, focus order, semantics).
- LocalizationAgent: translatability and global readiness.
- AnalyticsAgent: event recommendations for measurement.

### Requirements
- Use inside Cursor (Figma MCP available via the Figma desktop app integration).
- You provide a Figma file URL or a node id (e.g., `1:2`).

### Quick Start
1) Open the Figma file in the Figma desktop app and select a frame (or keep the selection on the page).
2) In Cursor chat, paste the contents of `agents/MASTER.md` and follow the steps.
3) The MasterAgent will:
   - Fetch design context via Figma MCP
   - Hand off to WordingAgent and DesignRulesAgent
   - Produce a report in `reports/figma-audit.md`

### Customization
- Update `rules/tokens.json` to match your design tokens.
- Update `rules/design-rules.json` to tweak rule severities/thresholds.
- Update `prompts/style-guide.md` to encode your brand voice and wording rules.
- Update `rules/master-rules.json` (designer-first constraints).
- Update `rules/ux-best-practices.json` and `rules/erp-rules.json` to guide CheckAgent.
- Update `rules/code-standards.json` and `rules/erp-architecture.json` to guide CodeExpertAgent.
- Deliberation mode: edit `rules/discussion-rules.json`; log decisions with `reports/decision-log.template.md`.
- Update `rules/a11y-rules.json`, `rules/i18n-rules.json`, and `rules/analytics-rules.json` for the new agents.

### Outputs
- `reports/figma-audit.md` — consolidated audit with prioritized issues.
- Optionally, paste proposed comments into Figma manually.

### Notes
- Keep it simple: this setup relies on Cursor chat + Figma MCP steps; no external services.


# Cursor_Search-filter
