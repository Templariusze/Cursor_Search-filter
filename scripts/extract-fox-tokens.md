# Figma MCP Token Extraction Script

## Steps to Extract FOX Design Tokens

Once Figma Desktop has the FOX Design Tokens file open and selected, run these commands:

### 1. Get Variable Definitions
**Command:** Get variable definitions from current Figma selection
**What it does:** Extracts all color, spacing, typography, and effect variables from FOX

### 2. Get Design Context  
**Command:** Get design context from node 10181-19921
**What it does:** Gets the structure and organization of tokens

### 3. Map to Local Tokens
**Command:** Map extracted FOX variables to rules/tokens.json structure
**What it does:** Creates mappings between FOX tokens and local token names

## Expected Output

After extraction, I'll update:
- `rules/tokens.json` - With all FOX token values
- `rules/figma-design-system.json` - Complete FOX reference
- `reports/fox-tokens-sync-report.md` - Full sync report

## Current Status

**Waiting for:** Figma Desktop file selection  
**Ready to:** Extract all FOX tokens automatically  
**MCP Server:** Available at http://127.0.0.1:3845/mcp

## Next Action

**Please:**
1. Open Figma Desktop App
2. Open file: `FOX-Design-Tokens` 
3. Select the tokens page/frame (node 10181-19921)
4. Say "extract tokens now" or confirm when ready

Then I'll use Figma MCP tools to get all variable definitions automatically!

