type Props = {
	level: 'Low' | 'Medium' | 'High' | 'Urgent'
}

export function PriorityPill({ level }: Props) {
	const colorClass =
		level === 'Urgent'
			? 'pill--danger'
			: level === 'High'
			? 'pill--dangerSoft'
			: level === 'Medium'
			? 'pill--accent'
			: 'pill--subtle'
	return <span className={`pill ${colorClass}`} aria-label={`Priority: ${level}`}>{level}</span>
}



