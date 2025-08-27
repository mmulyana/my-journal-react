import { RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { routers } from './routers'
import './assets/style/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={routers} />
	</StrictMode>
)
