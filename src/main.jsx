import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './componentes/Routers/Navigation.jsx'
import ProductosPrincipal from './componentes/Productos/ProductosPrincipal.jsx'
import ChatbotNutricion from './componentes/chatbot/ChatbotNutricion.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
   {/* <ChatbotNutricion/> */}
  </React.StrictMode>,
)
