type Props = {
	iso: string
}

function formatDate(iso: string): string {
	const d = new Date(iso)
	return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })
}

export function DateCell({ iso }: Props) {
	const date = new Date(iso)
	const today = new Date()
	const isPast = date.getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()
	return <time className={`date ${isPast ? 'date--overdue' : ''}`} dateTime={iso}>{formatDate(iso)}</time>
}



