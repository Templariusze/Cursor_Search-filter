# Figma Audit — Search&Filter Component

## Scope
- File: Best Practice Hub
- Component: Property1SearchProperty2Default (node-id: 180:10799)
- Date: 2024-12-19

## Summary
- Top issues (by severity):
  - Critical: 2
  - High: 3
  - Medium: 2
  - Low: 2

## Wording Findings

### Path: Toggle Switch Label
- **Text**: "For all APplus versions"
- **Issues**: 
  - Not action-oriented (style guide prefers verbs)
  - Ambiguous phrasing ("For all" could mean "apply to all" or "filter by all")
- **Suggestion**: "Include all versions" or "Show all versions"
- **Rationale**: More action-oriented and clearer intent per style guide. For ERP context, "Include" implies filtering behavior.
- **Severity**: Medium

### Path: Dropdown Label
- **Text**: "View boards"
- **Issues**: 
  - Could be more specific about what action it performs
  - "View" is passive; might be clearer as "Select board" or "Board view"
- **Suggestion**: "Select board view" or "Board view"
- **Rationale**: More descriptive and aligns with ERP precision terminology
- **Severity**: Low

### Path: Dropdown Label
- **Text**: "Filter and sort"
- **Issues**: 
  - Combines two actions; could be clearer if these are separate options
  - Style guide prefers action-oriented labels
- **Suggestion**: "Apply filters" (if it opens filter panel) or separate into "Filter" and "Sort"
- **Rationale**: ERP patterns favor showing applied filters clearly; combining actions may reduce clarity
- **Severity**: Medium

## Design Findings

### Path: Container / Input Field
- **Issue**: Touch target height below minimum requirement
- **Observed**: Container height is 40px, input field height appears to be ~32px
- **Expected**: Minimum 44px height per `design-rules.json` (Input.minHeight: 44)
- **Severity**: Critical
- **Fix**: Increase container height to at least 44px, ensure input field maintains 44px minimum height
- **How to change in Figma**:
  1) Select the Container (node-id: 89:26621)
  2) Change height from 40px to 44px minimum
  3) Adjust input field padding to maintain visual balance

### Path: Dropdown Components
- **Issue**: Touch target height below minimum requirement
- **Observed**: Dropdown height is 24px
- **Expected**: Minimum 44px height per `design-rules.json` (Button.minHeight: 44)
- **Severity**: Critical
- **Fix**: Increase dropdown height to 44px minimum
- **How to change in Figma**:
  1) Select each dropdown component (node-id: 695:68966 and 180:10449)
  2) Change height from 24px to 44px
  3) Adjust padding proportionally to maintain visual balance

### Path: Typography Scale
- **Issue**: Using 12px for body text; project tokens recommend 14px as base
- **Observed**: Placeholder text uses 12px font size
- **Expected**: Base text should be 14px per `tokens.json` typography scale
- **Severity**: High
- **Fix**: Update placeholder text to 14px; reserve 12px for labels/captions if needed
- **How to change in Figma**:
  1) Select the Input text element (node-id: 109:12437)
  2) Change font size from 12px to 14px
  3) Verify line-height is 1.5 per tokens (currently 1.25)

### Path: Color Contrast
- **Issue**: Need to verify WCAG AA contrast compliance
- **Observed**: Placeholder text color is `#818f9c` (light gray), background is white
- **Expected**: Minimum 4.5:1 contrast ratio for body text per `design-rules.json`
- **Severity**: High
- **Fix**: Verify contrast ratio; if below 4.5:1, darken placeholder text
- **How to change in Figma**:
  1) Check contrast ratio using Figma's contrast checker
  2) If below 4.5:1, adjust placeholder color to meet WCAG AA
  3) Consider using `textSecondary` token (#555555) from tokens.json

### Path: Spacing Scale
- **Issue**: Using 10px gap which is not in standard spacing scale
- **Observed**: Gap between main sections is 10px
- **Expected**: Use spacing scale from `tokens.json`: [4, 8, 12, 16, 20, 24, 32]
- **Severity**: Medium
- **Fix**: Change gap to 12px or 16px to align with spacing scale
- **How to change in Figma**:
  1) Select the Container (node-id: 89:26621)
  2) Change gap from 10px to 12px (or 16px for more separation)

### Path: Border Radius
- **Issue**: Using 4px radius; verify alignment with tokens
- **Observed**: Dropdowns use 4px border radius
- **Expected**: `tokens.json` specifies `sm: 4px`, which is correct
- **Severity**: Low
- **Fix**: No change needed; aligns with tokens

## Validation (CheckAgent)

### Source: Design
- **Path**: Input Field Height
- **Original finding**: Critical - height below 44px minimum
- **Decision**: Approve with changes
- **Adjusted severity**: Critical
- **Designer-facing guidance**:
  1) Increase container height to 44px minimum
  2) Ensure input maintains 44px touch target
  3) Verify visual balance with increased height
- **Why**: ERP accessibility requirement; expert users need reliable touch targets for efficiency

### Source: Design
- **Path**: Dropdown Height
- **Original finding**: Critical - height below 44px minimum
- **Decision**: Approve with changes
- **Adjusted severity**: Critical
- **Designer-facing guidance**:
  1) Increase dropdown height to 44px minimum
  2) Adjust padding to maintain proportional appearance
  3) Consider vertical alignment with other toolbar elements
- **Why**: Accessibility compliance and ERP efficiency standards

### Source: Wording
- **Path**: Toggle Label
- **Original finding**: Medium - "For all APplus versions" not action-oriented
- **Decision**: Approve with changes
- **Adjusted severity**: Medium
- **Designer-facing guidance**:
  1) Change text to "Include all versions" or "Show all versions"
  2) Verify label clarity when toggle is both on/off states
  3) Consider adding tooltip if meaning needs clarification
- **Why**: Aligns with style guide action-oriented preference and ERP clarity requirements

### Source: Design
- **Path**: Filter/Sort Combined Control
- **Original finding**: Medium - combines two actions
- **Decision**: Approve with changes
- **Adjusted severity**: High
- **Designer-facing guidance**:
  1) Consider separating into "Filter" and "Sort" controls if both actions are frequently used
  2) If keeping combined, ensure the dropdown clearly shows both options
  3) Per ERP rules, show applied filters prominently with easy removal
- **Why**: ERP pattern states "Advanced filters available without hiding critical options" - combining may hide options

## Recommendations (Prioritized)

1. **Critical**: Increase all touch targets to 44px minimum height
   - Input field: 40px → 44px
   - Dropdowns: 24px → 44px
   - This is required for accessibility compliance

2. **High**: Verify and fix color contrast for placeholder text
   - Current placeholder (#818f9c) may not meet WCAG AA 4.5:1 ratio
   - Consider using project token `textSecondary` (#555555)

3. **High**: Consider separating "Filter and sort" into two controls
   - ERP best practice: "Advanced filters available without hiding critical options"
   - Separate controls improve discoverability and efficiency

4. **High**: Update typography to use 14px base font size
   - Aligns with project token scale
   - Improves readability

5. **Medium**: Adjust spacing to use standard scale (12px or 16px instead of 10px)
   - Maintains design system consistency

6. **Medium**: Improve toggle label wording
   - Change "For all APplus versions" → "Include all versions"
   - More action-oriented and clearer

7. **Low**: Consider more descriptive dropdown labels
   - "View boards" → "Select board view" or "Board view"
   - More specific terminology per ERP requirements

## Additional ERP Considerations

### Applied Filters Visibility
- **Issue**: Design doesn't show applied filters as chips/tags
- **Recommendation**: Add visual indicators for active filters (chips with remove buttons)
- **Rationale**: ERP rule states "Show applied filters clearly with easy removal"
- **How to change in Figma**:
  1) Add a section below the toolbar showing active filter chips
  2) Each chip should have a clear remove (×) button
  3) Use contrasting color to indicate active state

### Keyboard Navigation
- **Issue**: Design doesn't indicate keyboard accessibility
- **Recommendation**: Ensure all controls are keyboard navigable
- **Rationale**: ERP principle "Favor efficiency for expert users (keyboard, batch actions)"

### Filter Persistence
- **Note**: Consider adding visual indicator if filters persist across sessions
- **Rationale**: ERP pattern "Persist last-used filters per user when possible"

## Appendix

### Style Guide Notes
- Voice: Friendly, concise, confident
- Labels: Start with verbs, use Title Case for buttons
- Preferred terms: Clear, action-oriented language

### Design Tokens Used
- Colors: Project uses `textPrimary: #111111`, `textSecondary: #555555` (not FOX tokens)
- Typography: Scale [12, 14, 16, 18, 20, 24, 32, 40], line-height 1.5 (body)
- Spacing: Scale [4, 8, 12, 16, 20, 24, 32]
- Radii: sm: 4px, md: 8px, lg: 12px
- Touch targets: Minimum 44px

### Node Paths Inspected
- Container: 89:26621
- Search Input: 109:12432
- Toggle Switch: 695:66138
- View boards Dropdown: 695:68965
- Filter and sort Dropdown: 180:10448

