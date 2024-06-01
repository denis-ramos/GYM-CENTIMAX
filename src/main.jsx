import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Celular from './componentes/com21.1/Celular.jsx'
import Inicio from './componentes/inicio/Inicio.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/gym_centimax/"> {/* Reemplaza 'tu-nombre-de-repo' con el nombre de tu repositorio */}
      <Inicio />
    </BrowserRouter>
  </React.StrictMode>,
)
