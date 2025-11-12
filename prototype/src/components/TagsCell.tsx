export function TagsCell({ tags }: { tags: string[] }) {
	return (
		<div className="cellTags" aria-label="Tags">
			{tags.map(t => (
				<span key={t} className="tag">{t}</span>
			))}
		</div>
	)
}



