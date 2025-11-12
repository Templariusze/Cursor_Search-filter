import { KanbanColumn } from './KanbanColumn'

export type KanbanCardT = {
  id: string
  title: string
  description: string
  tags: string[]
}

export type KanbanColumnT = {
  id: string
  title: string
  cards: KanbanCardT[]
}

export type KanbanBoardT = {
  columns: KanbanColumnT[]
}

export function KanbanBoard({ board }: { board: KanbanBoardT }) {
  return (
    <div className="kanban" role="region" aria-label="Kanban board">
      {board.columns.map(col => (
        <KanbanColumn key={col.id} column={col} />
      ))}
    </div>
  )
}


