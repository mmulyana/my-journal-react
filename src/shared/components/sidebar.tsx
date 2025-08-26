import { Album, BookOpen, Calendar, Image, Star, Tag } from 'lucide-react'
import { NavLink } from 'react-router'
import { cn } from '../utils'

const links = [
	{
		icon: <Album size={20} strokeWidth={2}/>,
		name: 'Journal',
		to: '/',
	},
	{
		icon: <Star size={20} strokeWidth={2}/>,
		name: 'Favorites',
		to: '/favorites',
	},
	{
		icon: <Calendar size={20} strokeWidth={2}/>,
		name: 'Calendar',
		to: '/calendar',
	},
	{
		icon: <Image size={20} strokeWidth={2}/>,
		name: 'Media',
		to: '/media',
	},
	{
		icon: <Tag size={20} strokeWidth={2}/>,
		name: 'Tag',
		to: '/tag',
	},
]

export default function Sidebar() {
	return (
		<div className='basis-[240px] grow min-h-full border-r border-[#d8dadd]'>
			<div className='h-full p-4'>
				<div className='flex gap-2'>
					<div className='h-7 w-7 rounded-md flex items-center justify-center bg-[#4F54EC]'>
						<BookOpen className='text-white' size={18} />
					</div>
					<p className='font-medium text-lg'>My Journal</p>
				</div>

				<div className='mt-6 space-y-4 flex flex-col'>
					{links?.map((i, index) => (
						<NavLink
							key={index}
							className={({ isActive }) =>
								cn(isActive ? 'text-blue-500 bg-gray-200' : 'text-gray-500 hover:bg-gray-100', 'flex gap-2 px-2 py-1.5 rounded-md items-center')
							}
							to={i.to}
						>
							{i.icon} {i.name}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	)
}
