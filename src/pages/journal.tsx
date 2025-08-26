import { Album, Plus } from 'lucide-react'
import Mainlayout from '../shared/layout/main-layout'

export default function Journal() {
	return (
		<Mainlayout>
			<div className='flex min-h-full'>
				<div className='shrink-0 basis-[320px] border-r border-[#d8dadd] h-screen '>
					<div className='h-12 border-b border-[#d8dadd] flex justify-between items-center px-4 sticky top-0 bg-white'>
						<div className='flex gap-2 items-center'>
							<Album size={20} strokeWidth={2} />
							<p>Journal</p>
						</div>

						<button className='py-1 flex items-center rounded-md pr-2 pl-1.5 bg-[#4F54EC] text-white gap-1 border border-[#4044D0]'>
							<Plus size={14} strokeWidth={2.5} />
							<p className='text-sm'>Create New</p>
						</button>
					</div>

					<div className='overflow-y-auto h-[calc(100vh-48px)]'>
						<div className='bg-slate-200 h-[800px] w-full'></div>
					</div>
				</div>
				<div className='grow-[999] min-h-full w-full bg-gray-100'>
					<div className='h-12 border-b border-[#d8dadd] flex justify-between items-center px-4 sticky top-0 bg-white'>
						
					</div>
				</div>
			</div>
		</Mainlayout>
	)
}
