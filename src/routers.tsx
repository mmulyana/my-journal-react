import { createBrowserRouter } from 'react-router'

import Journal from './pages/journal'
import JournalDetail from './modules/journal/components/journal-detail'
import JournalForm from './modules/journal/components/journal-form'

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <Journal />,
		children: [
			{
				path: '/add',
				element: <JournalForm />,
			},
			{
				path: '/:id',
				element: <JournalDetail />,
			},
		],
	},
])
