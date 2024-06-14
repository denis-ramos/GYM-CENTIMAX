import React from 'react'
import "./InformacionUsuario.css"
import imagen1 from "../../assets/imagens/imagen1.png"
import { FaCalendarDays } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
function InformacionUsuario(props) {
const users=props.users
    
  return (
    <div className="contenedor_InformacionUsuario">
        <img className="imagen_usuario"src={users.avatar}/>
        <div className="contenedorava">        </div>
        <p className="firstname">{users.firstname}</p>
        <NavLink to="/AsistenciaCalendario">
        <FaCalendarDays />
        </NavLink>
    </div>
  )
}

export default InformacionUsuario