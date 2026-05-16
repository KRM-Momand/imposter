import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

//import LifeConceptProvider from './contexts/LifeConceptProvider.jsx'
import { LifeConceptContext } from './contexts/LifeConceptContext.jsx'
import PlayerProvider from './contexts/playerProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LifeConceptProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </LifeConceptProvider>
    </BrowserRouter>
  </StrictMode>,
)
