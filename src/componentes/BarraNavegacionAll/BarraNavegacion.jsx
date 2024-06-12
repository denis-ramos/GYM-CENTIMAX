import React, { useState, useEffect } from "react";
import "./BarraNavegacion.css";
import barras from "../../assets/icons/3barritas.png";
import BarraDeMenu from "./BarraDeMenu";
import { NavLink } from "react-router-dom";
const BarraNavegacion = (props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/Users/${props.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuVisible(!menuVisible);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.BarraMenu') && menuVisible) {
        setMenuVisible(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [menuVisible]);
  return (
    <div className="barraDeNavegacion">
      <div className="contenedor">
      <NavLink to= {`/Usuario?id=${props.id}`} className="navlink-no-under">  
        <h1 className="titulo">GYM CENTMAXFIX</h1>
      </NavLink>
        <img className="barritas " src={barras} alt="" onClick={toggleMenu}/>
      </div>
      <BarraDeMenu users={users} isVisible={menuVisible} />
    </div>
  );
};

export default BarraNavegacion;
