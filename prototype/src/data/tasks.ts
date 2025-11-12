import type { TaskRow } from '../types'

export const SAMPLE_TASKS: TaskRow[] = [
	{
		id: 't-001',
		description: 'Define table columns and semantics',
		status: 'In Progress',
		priority: 'High',
		assignee: { id: 'u-1', name: 'Alex Kim', initials: 'AK' },
		dueDate: new Date(Date.now() + 3 * 86400000).toISOString(),
		tags: ['frontend', 'a11y'],
	},
	{
		id: 't-002',
		description: 'Wire debounced search with clear',
		status: 'Not Started',
		priority: 'Medium',
		assignee: { id: 'u-2', name: 'Sam Lee', initials: 'SL' },
		dueDate: new Date(Date.now() + 7 * 86400000).toISOString(),
		tags: ['frontend'],
	},
	{
		id: 't-003',
		description: 'Implement StatusBadge + PriorityPill tokens',
		status: 'In Progress',
		priority: 'Urgent',
		assignee: { id: 'u-3', name: 'Priya N', initials: 'PN' },
		dueDate: new Date(Date.now() + 1 * 86400000).toISOString(),
		tags: ['design', 'tokens'],
	},
	{
		id: 't-004',
		description: 'Add responsive behavior and column visibility',
		status: 'Blocked',
		priority: 'Low',
		assignee: { id: 'u-4', name: 'Jordan Ray', initials: 'JR' },
		dueDate: new Date(Date.now() + 10 * 86400000).toISOString(),
		tags: ['ux'],
	},
	{
		id: 't-005',
		description: 'Connect filter chips and toolbar filter count',
		status: 'Done',
		priority: 'Medium',
		assignee: { id: 'u-1', name: 'Alex Kim', initials: 'AK' },
		dueDate: new Date(Date.now() - 1 * 86400000).toISOString(),
		tags: ['frontend'],
	},
]



