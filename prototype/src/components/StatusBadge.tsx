type Props = {
	status: 'Not Started' | 'In Progress' | 'Done' | 'Blocked'
}

export function StatusBadge({ status }: Props) {
	const colorClass =
		status === 'Done'
			? 'badge--success'
			: status === 'In Progress'
			? 'badge--info'
			: status === 'Blocked'
			? 'badge--warning'
			: 'badge--neutral'
	return <span className={`badge ${colorClass}`} role="status" aria-label={`Status: ${status}`}>{status}</span>
}



