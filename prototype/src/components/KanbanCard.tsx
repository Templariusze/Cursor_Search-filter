import type { KanbanCardT } from './KanbanBoard'

export function KanbanCard({ card }: { card: KanbanCardT }) {
  return (
    <li className="card" role="listitem">
      <div className="card__header">
        <h3 className="card__title">{card.title}</h3>
      </div>
      <p className="card__desc">{card.description}</p>
      {card.tags.length > 0 && (
        <div className="card__tags" aria-label="Tags">
          {card.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}
    </li>
  )
}


