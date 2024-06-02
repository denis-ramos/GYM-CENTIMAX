import React from 'react'
import Inicio from '../inicio/Inicio.jsx'
import Inicio_de_secion from '../inicio_de_secion/Inicio_de_secion'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
function Navigation() {
  return (
    <BrowserRouter basename='gym_centimax'>
        <Routes >
            <Route path="/" element={<Inicio/>} />
            <Route path="/Inicio_de_secion" element={<Inicio_de_secion/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation