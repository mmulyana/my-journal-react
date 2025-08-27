import { createBrowserRouter } from 'react-router'

import DetailJournal from './modules/journal/components/journal-detail'
import Journal from './pages/journal'

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <Journal />,
		children: [
			{
				path: '/add',
				element: null,
			},
			{
				path: '/:id',
				element: <DetailJournal />,
			},
		],
	},
])
