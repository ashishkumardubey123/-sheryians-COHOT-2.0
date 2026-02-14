import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Datacontext from './Context/Datacontext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   
<Datacontext>
   <App />
</Datacontext>

   
 
 
)
