import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sekcje from './Sekcje.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sekcje />
  </StrictMode>,
)
