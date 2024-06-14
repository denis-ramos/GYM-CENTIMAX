import React from 'react'
import Inicio from '../inicio/Inicio.jsx'
import Inicio_de_secion from '../inicio_de_secion/Inicio_de_secion'
import Registro from '../registro/Registro.jsx'
import Usuario from '../Aususario/Usuario.jsx'
import Entrenadores from '../Entrenador/Entrenadores.jsx'
import PerfilEntrenador from '../PerfilEntrenador/PerfilEntrenador.jsx'
import InicionSesionEntrenador from '../Inicio_de_sesion_Entrenador/InicionSesionEntrenador.jsx'
import InicioSecionNutricionista from '../Inicio_sesion_nutricionista/InicioSecionNutricionista.jsx'
import PerfilNutricionista from '../PerfilNutricionista/PerfilNutricionista.jsx'
import Nutricionistas from '../Nutricionista/Nutricionistas.jsx'
import ProductosPrincipal from '../Productos/ProductosPrincipal.jsx'
import ChatbotNutricion from '../chatbot/ChatbotNutricion.jsx'
import ReservaClasesCircuitos from '../ReservaClasesCircuitos/ReservaClasesCircuitos.jsx'
import TarjetaGrafica from '../graficaDeEvaluacion/TarjetaGrafica.jsx'
import ClasesDisponibles from '../ClasesDisponibles/ClasesDisponibles.jsx'
import { HashRouter, Route, Router, Routes } from 'react-router-dom'
import Producto from '../Productos/Producto.jsx'
function Navigation() {
  return (
    <HashRouter >
        <Routes >
            <Route path="/" element={<Inicio/>} />
            <Route path="/Inicio_de_secion" element={<Inicio_de_secion/>} />
            <Route path="/Registro" element={<Registro/>} />
            <Route path="/Usuario" element={<Usuario/>} />
            <Route path="/InicioDeSesionEntrenador" element={<InicionSesionEntrenador/>} />
            <Route path="/InicioDeSesionNutricionista" element={<InicioSecionNutricionista/>} />
            <Route path="/Entrendores" element={<Entrenadores/>} />
            <Route path="/entrenador/:id" element={<PerfilEntrenador />} />
            <Route path="/Nutricionistas" element={<Nutricionistas/>} />
            <Route path="/Nutricionista/:id" element={<PerfilNutricionista />} />
            <Route path="/Productos" element={<ProductosPrincipal />} />
            <Route path="/Producto" element={<Producto />} />
            <Route path="/ChatbotNutricion" element={<ChatbotNutricion/>} />
            <Route path="/ClasesDisponibles" element={<ClasesDisponibles/>} />
            <Route path="/Reservas" element={<ReservaClasesCircuitos/>} />
            <Route path="/Avances" element={<TarjetaGrafica/>} />

            <Route path="/*" element= {<p>Error 404 Recurso no encontrado</p>} />
        </Routes>
    </HashRouter>
  )
}

export default Navigation