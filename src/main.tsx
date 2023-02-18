import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components'
import './index.css'

const root = document.getElementById('root')!

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
)
