export type TaskRow = {
	id: string
	description: string
	status: 'Not Started' | 'In Progress' | 'Done' | 'Blocked'
	priority: 'Low' | 'Medium' | 'High' | 'Urgent'
	assignee: { id: string; name: string; initials: string }
	dueDate: string
	tags: string[]
}

export type Column<T> = {
	id: string
	header: string
	width?: number | string
	render: (row: T) => JSX.Element
	sort?: (a: T, b: T) => number
	hideOnNarrow?: boolean
}

*** End Patch``` ?> ***!


