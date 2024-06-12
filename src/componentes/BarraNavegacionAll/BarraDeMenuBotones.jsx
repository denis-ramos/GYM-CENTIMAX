import React from "react";
import "./BarraDeMenuBotones.css";
import BuzonSugerencia from "../../assets/imagens/BuzonSugerencias.png";
import Calendario from "../../assets/imagens/Calendario.png";
import Mancuerna from "../../assets/imagens/Mancuerna.png";
import Suplementos from "../../assets/imagens/Suplementos.png";
import { NavLink } from "react-router-dom";

const BarraDeMenuBotones = (props) => {
  const users=props.users
  return (
    <div className="BarraMenuBotones">
      <p>Principal</p>
      <div className="Barra">
        <div className="BarraBotonesImagenes">
          <img src={Mancuerna} alt="" />
          <img src={Suplementos} alt="" />
          <img src={Calendario} alt="" />
          
        </div>
        <div className="BarraBotonesTexto">

          <NavLink to={`/Entrendores`}>
          <button>Entrenadores</button>
          </NavLink>

          <button>Recomendacion de suplementos</button>
          <button>Clases disponibles</button>
          
        </div>
      </div>
    </div>
  );
};

export default BarraDeMenuBotones;
