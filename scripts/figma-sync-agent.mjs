import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const TOKENS_PATH = path.join(ROOT, 'rules', 'tokens.json')
const DESIGN_SYSTEM_PATH = path.join(ROOT, 'rules', 'figma-design-system.json')
const REPORT_PATH = path.join(ROOT, 'reports', 'fox-tokens-sync-report.md')

function stable(obj) {
  if (Array.isArray(obj)) return obj.map(stable)
  if (obj && typeof obj === 'object') {
    return Object.keys(obj).sort().reduce((acc, k) => {
      acc[k] = stable(obj[k])
      return acc
    }, {})
  }
  return obj
}

function stableStringify(obj) {
  return JSON.stringify(stable(obj), null, 2)
}

function hash(str) {
  return crypto.createHash('sha256').update(str).digest('hex').slice(0, 12)
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function writeJson(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8')
}

function writeReport({ source, beforeHash, afterHash, changesNote }) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
  const section = [
    `# FOX Design Tokens Sync Report — ${now}`,
    '',
    `Source: ${source}`,
    `Before: ${beforeHash}`,
    `After:  ${afterHash}`,
    '',
    changesNote ? `Notes:\n- ${changesNote}` : '',
    ''
  ].join('\n')
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true })
  const prev = fs.existsSync(REPORT_PATH) ? fs.readFileSync(REPORT_PATH, 'utf8') : ''
  fs.writeFileSync(REPORT_PATH, (prev ? prev + '\n' : '') + section, 'utf8')
}

async function getRemoteTokens() {
  // Preferred: provide REMOTE_TOKENS_URL that returns a tokens.json-like payload
  const url = process.env.REMOTE_TOKENS_URL
  if (url) {
    const res = await fetch(url, { headers: { 'accept': 'application/json' } })
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`)
    return await res.json()
  }
  // Alternative: provide REMOTE_TOKENS_FILE pointing to a JSON dump
  const file = process.env.REMOTE_TOKENS_FILE
  if (file) {
    const abs = path.isAbsolute(file) ? file : path.join(ROOT, file)
    return readJson(abs)
  }
  throw new Error('No remote provider configured. Set REMOTE_TOKENS_URL or REMOTE_TOKENS_FILE.')
}

function summarizeDiff(localStr, remoteStr) {
  try {
    const a = JSON.parse(localStr), b = JSON.parse(remoteStr)
    const keys = Array.from(new Set([...Object.keys(a), ...Object.keys(b)])).sort()
    const diffs = []
    for (const k of keys) {
      const ha = hash(stableStringify(a[k] ?? null))
      const hb = hash(stableStringify(b[k] ?? null))
      if (ha !== hb) diffs.push(`${k}: ${ha} -> ${hb}`)
    }
    return diffs.length ? diffs.join('\n- ') : 'No top-level diffs'
  } catch {
    return 'Diff summary unavailable'
  }
}

async function main() {
  const mode = process.argv[2] || 'check' // check | apply
  const source = process.env.REMOTE_TOKENS_URL || process.env.REMOTE_TOKENS_FILE || 'unknown-source'

  const local = readJson(TOKENS_PATH)
  const remote = await getRemoteTokens()

  const localStr = stableStringify(local)
  const remoteStr = stableStringify(remote)

  const beforeHash = hash(localStr)
  const afterHash = hash(remoteStr)

  if (beforeHash === afterHash) {
    console.log('No drift detected. Hash:', beforeHash)
    process.exit(0)
  }

  console.log('Drift detected.')
  console.log('Local:', beforeHash, 'Remote:', afterHash)
  console.log('Changed areas:\n- ' + summarizeDiff(localStr, remoteStr))

  if (mode !== 'apply') {
    // Exit code 2 to signal drift in CI without being a failure in logs
    process.exit(2)
  }

  // Backup then apply
  fs.copyFileSync(TOKENS_PATH, TOKENS_PATH + `.bak.${beforeHash}`)
  writeJson(TOKENS_PATH, remote)

  // Optional companion file if present in remote payload
  if (remote.figmaDesignSystem) {
    writeJson(DESIGN_SYSTEM_PATH, remote.figmaDesignSystem)
  }

  writeReport({
    source,
    beforeHash,
    afterHash,
    changesNote: 'Auto-applied by figma-sync-agent'
  })

  console.log('Applied new tokens. Hash:', afterHash)
}

main().catch(err => {
  console.error(err.message || err)
  process.exit(1)
})


