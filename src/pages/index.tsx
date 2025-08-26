import { createBrowserRouter } from 'react-router'
import Journal from './journal'

export const router = createBrowserRouter([{ path: '/', element: <Journal /> }])
