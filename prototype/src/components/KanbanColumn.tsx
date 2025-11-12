import { KanbanCard } from './KanbanCard'
import type { KanbanColumnT } from './KanbanBoard'

export function KanbanColumn({ column }: { column: KanbanColumnT }) {
  const labelId = `col-${column.id}`
  return (
    <section className="kanban__column" aria-labelledby={labelId}>
      <h2 className="kanban__column-title" id={labelId}>{column.title}</h2>
      <ul className="kanban__list" role="list">
        {column.cards.map(card => (
          <KanbanCard key={card.id} card={card} />
        ))}
        {column.cards.length === 0 && (
          <li className="kanban__empty" aria-live="polite">No matching cards</li>
        )}
      </ul>
    </section>
  )}


