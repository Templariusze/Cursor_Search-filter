import { useEffect, useMemo, useState } from 'react'
import type { TaskRow } from '../types'
import { StatusBadge } from './StatusBadge'
import { PriorityPill } from './PriorityPill'
import { AvatarWithName } from './AvatarWithName'
import { DateCell } from './DateCell'
import { TagsCell } from './TagsCell'
import { SearchBar } from './SearchBar'

type Props = {
	tasks: TaskRow[]
}

type SortKey = 'description' | 'status' | 'priority' | 'assignee' | 'due'
type SortDir = 'asc' | 'desc'

export function DataTable({ tasks }: Props) {
	const [queryInput, setQueryInput] = useState('')
	const [query, setQuery] = useState('')
	const [sortKey, setSortKey] = useState<SortKey>('due')
	const [sortDir, setSortDir] = useState<SortDir>('asc')

	// Debounce search input
	useEffect(() => {
		const id = setTimeout(() => setQuery(queryInput.trim().toLowerCase()), 300)
		return () => clearTimeout(id)
	}, [queryInput])

	const sorted = useMemo(() => {
		const compare = (a: TaskRow, b: TaskRow): number => {
			switch (sortKey) {
				case 'description': return a.description.localeCompare(b.description)
				case 'status': return a.status.localeCompare(b.status)
				case 'priority': {
					const order = { Urgent: 3, High: 2, Medium: 1, Low: 0 }
					return order[a.priority] - order[b.priority]
				}
				case 'assignee': return a.assignee.name.localeCompare(b.assignee.name)
				case 'due': return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
			}
		}
		const list = [...tasks].sort(compare)
		return sortDir === 'asc' ? list : list.reverse()
	}, [tasks, sortKey, sortDir])

	const filtered = useMemo(() => {
		if (!query) return sorted
		return sorted.filter(t => {
			const hay = `${t.description} ${t.status} ${t.priority} ${t.assignee.name} ${t.tags.join(' ')}`.toLowerCase()
			return hay.includes(query)
		})
	}, [sorted, query])

	const onHeaderClick = (key: SortKey) => {
		if (key === sortKey) {
			setSortDir(prev => (prev === 'asc' ? 'desc' : 'asc'))
		} else {
			setSortKey(key)
			setSortDir('asc')
		}
	}

	const sortIndicator = (key: SortKey) => (sortKey === key ? (sortDir === 'asc' ? ' ▲' : ' ▼') : '')

	return (
		<div className="dataView">
			<nav className="tabs" aria-label="Views">
				<button className="tab tab--active" type="button" aria-current="page">Tasks</button>
			</nav>

			<div className="toolbar" role="toolbar" aria-label="Table toolbar">
				<button className="toolbar__button" type="button">Filter (0)</button>
				<button className="toolbar__button" type="button">Sort</button>
				<button className="toolbar__button" type="button">Layout</button>
				<div style={{ flex: '1 1 auto', minWidth: 180 }}>
					<SearchBar value={queryInput} onChange={setQueryInput} placeholder="Search tasks" />
				</div>
				<button className="toolbar__button toolbar__button--primary" type="button">New</button>
			</div>

			<div className="tableWrap" role="region" aria-label="Tasks table">
				<table className="data">
					<thead>
						<tr>
							<th scope="col">
								<button className="tab" onClick={() => onHeaderClick('description')} aria-label="Sort by description">
									Description{sortIndicator('description')}
								</button>
							</th>
							<th scope="col">
								<button className="tab" onClick={() => onHeaderClick('status')} aria-label="Sort by status">
									Status{sortIndicator('status')}
								</button>
							</th>
							<th scope="col">
								<button className="tab" onClick={() => onHeaderClick('priority')} aria-label="Sort by priority">
									Priority{sortIndicator('priority')}
								</button>
							</th>
							<th scope="col" className="hideNarrow">
								<button className="tab" onClick={() => onHeaderClick('assignee')} aria-label="Sort by assignee">
									Assignee{sortIndicator('assignee')}
								</button>
							</th>
							<th scope="col">
								<button className="tab" onClick={() => onHeaderClick('due')} aria-label="Sort by due date">
									Due Date{sortIndicator('due')}
								</button>
							</th>
							<th scope="col" className="hideNarrow">Tags</th>
						</tr>
					</thead>
					<tbody>
						{filtered.map(row => (
							<tr key={row.id} tabIndex={0}>
								<td>{row.description}</td>
								<td><StatusBadge status={row.status} /></td>
								<td><PriorityPill level={row.priority} /></td>
								<td className="hideNarrow"><AvatarWithName {...row.assignee} /></td>
								<td><DateCell iso={row.dueDate} /></td>
								<td className="hideNarrow"><TagsCell tags={row.tags} /></td>
							</tr>
						))}
						{filtered.length === 0 && (
							<tr>
								<td colSpan={6} role="status">No tasks match your search</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}



