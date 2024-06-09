import React, { useEffect, useState } from 'react'
import "./Usuario.css"
import InformacionUsuario from './InformacionUsuario'
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion'
import BotonoesUsuario from './BotonoesUsuario'
import entrenamiento from "../../assets/imagens/Entrenamiento.png"
import dieta from "../../assets/imagens/Dieta.png"
import avances from "../../assets/imagens/AvancesFisicos.png"
import { useSearchParams } from 'react-router-dom'

function Usuario() {
  const [users, setUsers] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  const id=searchParams.get("id")
  useEffect(() => {
    fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/Users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="contenedor_usuario">
      <BarraNavegacion users={users} id={id}/>
      <div className="subcontenedor_usuario">
        <div className="targetausuario">
          <p className="bienvenido_usuario">Bienvenido</p>
          <InformacionUsuario users={users} />
          <BotonoesUsuario backgroundImage={entrenamiento} text="Entrenamiento"/>
          <BotonoesUsuario backgroundImage={dieta} text="Dieta"/>
          <BotonoesUsuario backgroundImage={avances} text="Avnaces Fisicos"/>
        </div>
        
      </div>
    </div>
  )
}

export default Usuario