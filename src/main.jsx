import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/slick-slider/slick/slick.css'
import '../node_modules/slick-slider/slick/slick-theme.css'
import '../node_modules/animate.css/animate.min.css';

import './style/magnific-popup.min.css'
import './style/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
