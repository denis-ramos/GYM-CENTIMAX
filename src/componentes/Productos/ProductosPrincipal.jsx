import React, { useEffect, useState } from 'react'
import Botones from './Botones.jsx'
import Productos from './Productos.jsx'
import "./ProductosPrincipal.css"

import useStore from '../../assets/store/useStore.js';
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion.jsx'

function ProductosPrincipal() {


  const id = useStore((state) => state.id);
  return (
  <div className="contenedorpri">
    <BarraNavegacion id={id}/>
    <Botones/>

  <Productos/>

    
  </div>
  )
}

export default ProductosPrincipal