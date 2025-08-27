import { Link } from 'react-router'
import { cn } from '../../../shared/utils'

type props = {
	active?: boolean
	title: string
	description: string
	images?: {
		id: string
		url: string
	}[]
	tags: {
		id: string
		name: string
		color: string
	}[]
	id: string
}
export default function JournalListItem({
	active,
	title,
	description,
	tags,
	images,
	id,
}: props) {
	const truncated =
		description.length > 48 ? description.slice(0, 48) + '...' : description

	return (
		<div
			className={cn(
				'p-4 border-b border-[#d8dadd] relative flex gap-1',
				active && 'bg-[#F5F5F5]'
			)}
		>
			{active && (
				<div className='absolute left-0 top-0 w-0.5 h-full bg-blue-600'></div>
			)}
			<div className=''>
				<div className='flex justify-between'>
					<Link to={id} className='font-medium'>
						{title}
					</Link>
					<p className='text-right text-sm'>Aug 14</p>
				</div>
				<div className='flex justify-between'>
					<div>
						<p className='opacity-80 text-sm mt-2'>{truncated}</p>
						{!!tags.length && (
							<div className='mt-3 flex flex-wrap gap-1'>
								{tags?.slice(0, 2).map((i) => (
									<div
										key={i.id}
										className='w-fit px-1.5 py-1 relative rounded-md border-transparent border flex justify-center items-center overflow-hidden'
									>
										<div
											className='absolute w-full h-full'
											style={{
												background: i.color,
												opacity: 0.2,
											}}
										></div>
										<p className='text-xs'>{i.name}</p>
									</div>
								))}
								{tags.length > 2 && (
									<div className='w-fit px-1.5 py-1 relative rounded-md flex justify-center items-center overflow-hidden'>
										<p className='text-xs'>{tags.length - 2} More</p>
									</div>
								)}
							</div>
						)}
					</div>
					<div>
						{!!images?.length && (
							<div className='mt-4 relative h-16 w-16'>
								<div className='left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10 h-16 w-16 rounded-md bg-white p-[3px] shadow shadow-gray-800/20 rotate-8'>
									<img
										className='rounded w-full h-full object-fill'
										src={images?.[0].url}
									/>
								</div>
								<div className='left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-[68px] h-[68px] rounded-md bg-white'></div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
