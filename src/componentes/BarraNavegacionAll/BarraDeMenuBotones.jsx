import React from "react";
import "./BarraDeMenuBotones.css";
import BuzonSugerencia from "../../assets/imagens/BuzonSugerencias.png";
import Calendario from "../../assets/imagens/Calendario.png";
import Mancuerna from "../../assets/imagens/Mancuerna.png";
import Suplementos from "../../assets/imagens/Suplementos.png";

const BarraDeMenuBotones = () => {
  return (
    <div className="BarraMenuBotones">
      <p>Principal</p>
      <div className="Barra">
        <div className="BarraBotonesImagenes">
          <img src={Mancuerna} alt="" />
          <img src={Suplementos} alt="" />
          <img src={Calendario} alt="" />
          <img src={BuzonSugerencia} alt="" />
        </div>
        <div className="BarraBotonesTexto">
          <button>Entrenadores</button>
          <button>Recomendacion de suplementos</button>
          <button>Clases disponibles</button>
          <button>Buzon de sugerencia</button>
        </div>
      </div>
    </div>
  );
};

export default BarraDeMenuBotones;
