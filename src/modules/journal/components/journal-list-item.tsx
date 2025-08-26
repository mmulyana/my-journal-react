type props = {
	active?: boolean
	title: string
	description: string
	tags: {
		id: string
		name: string
		color: string
	}[]
}
export default function JournalListItem({
	active,
	title,
	description,
	tags,
}: props) {
	return (
		<div className='p-4 border-b border-gray-400 relative'>
			{active && (
				<div className='absolute left-0 top-0 w-2 h-full bg-blue-600'></div>
			)}
			<div>
				<p className='font-medium'>{title}</p>
				<p className='opacity-80 text-sm mt-2'>{description}</p>
				{tags.length > 1 && (
					<div className='mt-3'>
						{tags?.splice(0, 2)?.map((i) => (
							<div
								key={i.id}
								className='w-fit px-1.5 py-1 relative rounded-md border-transparent border'
							>
								<div
									className='absolute w-full h-full'
									style={{
										background: i.color,
										opacity: 0.5,
									}}
								></div>
								<p>{i.name}</p>
							</div>
						))}
						{tags.length > 2 && (
							<div className='w-fit px-1.5 py-1 relative border rounded-md'>
								{tags.length - 2} More
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
