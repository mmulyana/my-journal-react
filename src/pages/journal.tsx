import { Album, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Link, Outlet, useParams } from 'react-router'

import JournalListItem from '../modules/journal/components/journal-list-item'
import Mainlayout from '../shared/layout/main-layout'
import { useMonth } from '../shared/hooks/use-month'
import { journals } from '../data/common'

export default function Journal() {
	const { month, next, prev, year } = useMonth()
	const { id } = useParams()

	return (
		<Mainlayout>
			<div className='flex min-h-full'>
				<div className='shrink-0 basis-[320px] border-r border-[#d8dadd] h-screen '>
					<div className='h-12 border-b border-[#d8dadd] flex justify-between items-center px-4 sticky top-0 bg-white'>
						<div className='flex gap-2 items-center'>
							<Album size={20} strokeWidth={2} />
							<p>Journal</p>
						</div>

						<Link
							to={'/add'}
							className='py-1 flex items-center rounded-md pr-2 pl-1.5 bg-[#4F54EC] text-white gap-1 border border-[#4044D0]'
						>
							<Plus size={14} strokeWidth={2.5} />
							<p className='text-sm'>Create New</p>
						</Link>
					</div>

					<div className='overflow-y-auto h-[calc(100vh-48px)]'>
						<div className='h-[800px] w-full'>
							<div className='flex justify-between items-center py-3 px-4'>
								<button
									className='cursor-pointer text-gray-400 hover:bg-gray-100 h-7 w-7 flex justify-center items-center rounded-md'
									onClick={() => prev()}
								>
									<ChevronLeft size={20} strokeWidth={2.5} />
								</button>
								<p className='text-gray-800'>
									{month}, {year}
								</p>
								<button
									className='cursor-pointer text-gray-400 hover:bg-gray-100 h-7 w-7 flex justify-center items-center rounded-md'
									onClick={() => next()}
								>
									<ChevronRight size={20} strokeWidth={2.5} />
								</button>
							</div>

							{journals.map((i, idx) => (
								<JournalListItem
									key={idx}
									description={i.description}
									tags={i.tags}
									title={i.title}
									active={id === i.id}
									images={i.images}
									id={i.id}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='grow-[999] min-h-full w-full bg-gray-100'>
					<Outlet />
				</div>
			</div>
		</Mainlayout>
	)
}
