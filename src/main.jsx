import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "modern-normalize";
// import App from './components/App'
import './components/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  </StrictMode>,
)
