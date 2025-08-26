import type { PropsWithChildren } from 'react'
import Sidebar from '../components/sidebar'

export default function Mainlayout({ children }: PropsWithChildren) {
	return (
		<div className='min-h-screen flex flex-wrap justify-stretch'>
			<Sidebar />
			<main className='basis-0 grow-[999] min-w-[50%] min-h-full'>
				{children}
			</main>
		</div>
	)
}
