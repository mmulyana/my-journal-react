import { useParams } from 'react-router'

export default function DetailJournal() {
	const { id } = useParams()

	return (
		<div>
			<div className='h-12 border-b border-[#d8dadd] flex justify-between items-center px-4 sticky top-0 bg-white'>
				<p>{id}</p>
			</div>
		</div>
	)
}
