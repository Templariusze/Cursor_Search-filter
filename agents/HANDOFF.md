## HandoffAgent — AI-to-AI Handoff Playbook

Use this to compile a machine-readable, deterministic spec that another AI can implement safely inside the ERP app.

### Inputs
- Figma MCP: Current selection metadata, design context, variable definitions
- MASTER_RULES: `rules/master-rules.json`
- ERP_RULES: `rules/erp-rules.json`
- UX_RULES: `rules/ux-best-practices.json`
- DESIGN_RULES: `rules/design-rules.json`
- TOKENS: `rules/tokens.json`

### Output
- JSON file conforming to `rules/handoff-schema.json`
- Path: `reports/ai-handoff/<featureId>.json`

### Steps
1) Collect context
   - From Figma MCP: node ids, component names/variants, styles, variables.
   - Map text nodes, interactive controls, error/empty/loading states.
   - Identify slot composition for container components (e.g., header/body/footer/actions).

2) Define meta and intent
   - `meta.featureId`: stable, kebab-case (e.g., `erp-sf-advanced-filter`).
   - Add Figma node ids. Reference rule sources you used.
   - Capture problem, scope, non-goals, KPIs.

3) Build uiSpec
   - Enumerate components with deterministic `id`, `type`, `variant`.
   - `props`: only literal data or token references.
   - `bindings`: name domain fields or simple expressions (no code), e.g., `query.status`.
   - `states`: include `idle`, `loading`, `empty`, `error` if applicable.
   - `interactions`: specify `event`, optional `guard`, `debounceMs`, and `effect` in plain language.
   - `a11y`: roles, labels, focus order, keyboard interactions.
   - `slots`: list slot names, required flags, allowed content, and default behavior.

4) Specify contracts
   - `domain`: entities/fields used by the feature.
   - `api`: CRUD or actions with request/response shapes and error codes.
   - `migrations`: tables/ops/columns if persistence changes are needed.
   - `auth`: roles/permissions required.
   - `errorCatalogRef`: link to the canonical error definitions file.
   - For each endpoint `errors`: prefer structured entries with `code`, `httpStatus`, `category`.
   - Default catalog: `rules/error-catalog.json#v1`. Cross-check that every `errors` code exists there.

5) Attach rules
   - Curate normative rules from ERP/UX/Code/Design. Use short, imperative sentences.

6) Define tests
   - Acceptance: Given/When/Then for core scenarios.
   - Edge cases: empty results, auth failures, offline, long latency.
   - Rollback: how to revert if feature flag is off.

7) Set non-functional spec
   - `performance.budgets`: local apply, remote response, bundle budget, debounce.
   - `telemetry.events`: event names, when they fire, sampling, properties with PII classification.
   - `i18n`: default locale, keys with placeholders and pluralization.
   - `rollout`: strategy, target %, segments, kill switch flag, stages.

8) Validate
   - Validate the document against `rules/handoff-schema.json`.
   - If validation fails, fix or mark the missing inputs explicitly.

9) Save
   - Save to `reports/ai-handoff/<featureId>.json`.

### Authoring constraints (to reduce ambiguity)
- No hidden context; everything must be explicit in the JSON.
- Prefer enums and tokens to free text where possible.
- Avoid code in strings; use simple expressions only for `bindings` names.
- Link back to immutable Figma node ids.

### Developer Agent Consumption Guidance
- Treat `contracts` as the only allowed integration surface.
- Enforce `rules` during implementation; fail if they cannot be met.
- Implement acceptance tests directly from `tests.acceptance`.


