type Props = {
	id: string
	name: string
	initials: string
}

export function AvatarWithName({ name, initials }: Props) {
	return (
		<div className="avatarName" title={name} aria-label={`Assignee: ${name}`}>
			<span className="avatar" aria-hidden="true">{initials}</span>
			<span className="avatarName__text">{name}</span>
		</div>
	)
}



