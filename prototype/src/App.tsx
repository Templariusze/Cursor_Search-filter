import { useEffect, useState } from 'react'
import { applyTheme } from './tokens'
import { DataTable } from './components/DataTable'
import { ComponentShowcase } from './components/ComponentShowcase'
import { SAMPLE_TASKS } from './data/tasks'

export type Tag = string

type View = 'showcase' | 'tasks'

export default function App() {
  const [view, setView] = useState<View>('showcase')

  useEffect(() => {
    applyTheme()
  }, [])

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">FOX Design System — Search&Filter</h1>
        <nav className="app__nav">
          <button
            className={`app__nav-button ${view === 'showcase' ? 'app__nav-button--active' : ''}`}
            onClick={() => setView('showcase')}
          >
            Component Showcase
          </button>
          <button
            className={`app__nav-button ${view === 'tasks' ? 'app__nav-button--active' : ''}`}
            onClick={() => setView('tasks')}
          >
            Tasks Table
          </button>
        </nav>
      </header>
      <main>
        {view === 'showcase' ? <ComponentShowcase /> : <DataTable tasks={SAMPLE_TASKS} />}
      </main>
    </div>
  )
}


