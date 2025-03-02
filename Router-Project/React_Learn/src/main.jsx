import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './StyleCSS/Style/App.css'




createRoot(document.getElementById('ro')).render(
  <StrictMode>
     <App/>
  </StrictMode>,
)
