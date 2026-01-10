import { StrictMode } from 'react'
import Contaxt from './Context/Contaxt.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <Contaxt>
    <App />
    </Contaxt>

)
