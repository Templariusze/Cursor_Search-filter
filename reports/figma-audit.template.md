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
- Path: <path>
  - Text: "<original>"
  - Issues: [<bullets>]
  - Suggestion: "<revised>"
  - Rationale: <1-2 lines>
  - Severity: <High|Medium|Low>

## Design Findings
- Path: <path>
  - Issue: <short description>
  - Observed: <actual style>
  - Expected: <token/rule reference>
  - Severity: <Critical|High|Medium|Low>
  - Fix: <short actionable suggestion>

## Slots Review
- Component: <name>
  - Slots found: [<header|media|body|footer|actions>]
  - Missing (expected per rules): [<names>]
  - Naming parity with code: <Yes|No>
  - Defaults preserve layout when empty: <Yes|No>
  - Allowed content respected: <Yes|No> (Notes: <short remark>)

## Variables & Modes Review
- Variables applied (no hard-coded values): <Yes|No>
- Modes present: { theme: <light|dark>, density: <comfortable|compact> }
- State variables used (e.g., `isOpen`, `activeTab`): <list>
- Notes: <short remark>

## Code Connect Mapping
- Component: <name>
- Figma → Code: <code path>
- API parity (props/events/slots): <Yes|No> (Notes: <short remark>)

## Validation (CheckAgent)
- Source: <Wording|Design>
  - Path: <path>
  - Original finding: <short summary>
  - Decision: <Approve as-is|Approve with changes|Reject>
  - Adjusted severity: <Critical|High|Medium|Low>
  - Designer-facing guidance:
    1) <short step>
    2) <short step>
    3) <optional short step>
  - Why: <reference to UX/ERP rule>

## Code Changes (CodeExpertAgent)
- Path: <file path>
  - Intent: <short human description>
  - Edit:
    ```<language>
    <new or updated code snippet>
    ```
  - Notes: <rationale, risks, test notes>

## Accessibility (AccessibilityAgent)
- Path: <path>
  - Issue: <short description>
  - Observed: <current behavior/style>
  - Expected: <a11y rule>
  - Severity: <Critical|High|Medium|Low>
  - How to change in Figma:
    1) <short step>
    2) <short step>
    3) <optional short step>

## Localization (LocalizationAgent)
- Path: <path>
  - Text: "<original>"
  - Issue: <short description>
  - Suggestion: "<revised or layout change>"
  - Severity: <High|Medium|Low>
  - How to change in Figma:
    1) <short step>
    2) <short step>
    3) <optional short step>

## Analytics (AnalyticsAgent)
- Path: <path>
  - Event: <name>
  - When: <trigger>
  - Props: { key: type/allowed values }
  - Notes: <short rationale>

## Recommendations (Prioritized)
1. <short actionable item>
2. <short actionable item>

## Appendix
- Style guide notes
- Design tokens used
- Node paths inspected

