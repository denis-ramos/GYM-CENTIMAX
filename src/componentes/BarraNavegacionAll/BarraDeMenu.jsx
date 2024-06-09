import React, { useState, useEffect } from "react";
import BarraDeMenuPerfil from "./BarraDeMenuPerfil.jsx";
import BarraDeMenuBotones from "./BarraDeMenuBotones.jsx";
import BarraDeMenuHorario from "./BarraDeMenuHorario.jsx";
import "./BarraDeMenu.css";

const BarraDeMenu = (props) => {
  const [profile, setProfile] = useState({ name: "Jhovany", avatar: "../img/FotoEt.png" });
  const users=props.users
  console.log(users)

  return (
    <div className={`BarraMenu ${props.isVisible ? 'visible' : ''}`}>
      <BarraDeMenuPerfil name1={users.firstname} name2={users.lastname} avatar={users.avatar} />
      <BarraDeMenuBotones />
      <BarraDeMenuHorario />
    </div>
  );
};

export default BarraDeMenu;
