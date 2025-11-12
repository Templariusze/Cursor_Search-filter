# FOX Design Tokens Sync Script

## Instructions for Manual Sync (if Figma MCP not working)

1. **Open Figma Desktop App**
   - Open file: `FOX-Design-Tokens`
   - Navigate to node: `9218:1556` or select the tokens page

2. **In Cursor Chat, run:**
   ```
   Extract design tokens from current Figma selection:
   - Get variable definitions
   - Get design context
   - Map to rules/tokens.json and rules/figma-design-system.json
   ```

3. **Or provide the data manually:**
   - Export tokens from Figma Variables panel
   - Paste here and I'll map them

## Automated Sync (Preferred)

Once Figma file is open and selected, I'll automatically:
- Extract all color variables
- Extract all typography styles  
- Extract all spacing variables
- Extract all radius variables
- Extract all effect variables
- Map to local token structure
- Update rules/tokens.json
- Update rules/figma-design-system.json

