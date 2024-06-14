import React, { useEffect, useState } from 'react'

import InformacionUsuario from '../Aususario/InformacionUsuario';
import BotonoesUsuario from '../Aususario/BotonoesUsuario';
import Barranav from "../Productos/Barranav"
import asignar from "../../assets/imagens/AsignarRutina.png"
import asignados from "../../assets/imagens/RutinasAsignadas.png"
import evaluacion from "../../assets/imagens/EvaluacionFisica.png"
import { useSearchParams } from 'react-router-dom';
import useStore from '../../assets/store/useStore'
function InicionSesionEntrenador() {

    const [users, setUsers] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const id=searchParams.get("id")
    
    useStore.setState({ id: id })
  
  
    useEffect(() => {
      fetch(`https://665fd3625425580055b101dd.mockapi.io/api/v1/Entrenadores/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUsers(data);
        });
    }, []);

    

  return (
    
    <div className="contenedor_usuario">
        <Barranav/>
      <div className="subcontenedor_usuario">
        <div className="targetausuario">
          <p className="bienvenido_usuario">Bienvenido</p>
          <InformacionUsuario users={users} />
          <BotonoesUsuario backgroundImage={asignar} text="ASIGNAR RUTINA"/>
          <BotonoesUsuario backgroundImage={asignados} text="RUTINAS ASIGNADAS"/>
          <BotonoesUsuario backgroundImage={evaluacion} text="EVALUACION FISICA"/>
        </div>
        
      </div>
    </div>
  )
}

export default InicionSesionEntrenador