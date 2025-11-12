import { useEffect, useMemo, useState } from 'react'
import { applyTheme } from './tokens'
import { DataTable } from './components/DataTable'
import { SAMPLE_TASKS } from './data/tasks'

export type Tag = string

export default function App() {
  const [query] = useState('')
  const [activeTags] = useState<Tag[]>([])

  useEffect(() => {
    applyTheme()
  }, [])

  const allTags = useMemo(() => [], [])

  const filtered = useMemo(() => ({ columns: [] as never[] }), [])

  const toggleTag = (_tag: Tag) => {}

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Best Practice Hub — Tasks</h1>
      </header>
      <main>
        <DataTable tasks={SAMPLE_TASKS} />
      </main>
    </div>
  )
}


