import React, { useEffect, useState } from 'react'
import InformacionUsuario from '../Aususario/InformacionUsuario';
import BotonoesUsuario from '../Aususario/BotonoesUsuario';
import Barranav from "../Productos/Barranav"
import dietaN from "../../assets/imagens/DietaN.png"
import dietaA from "../../assets/imagens/DietaA.png"
import { useSearchParams } from 'react-router-dom';


function InicioSecionNutricionista() {
    const [users, setUsers] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const id=searchParams.get("id")
    

  
  
    useEffect(() => {
      fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/nutricionistas/${id}`)
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
            <BotonoesUsuario backgroundImage={dietaN} text="ASIGNAR DIETA"/>
            <BotonoesUsuario backgroundImage={dietaA} text="DIETAS ASIGNADAS"/>
            <BotonoesUsuario backgroundImage={dietaN} text="EVALUACION NUTRICIONAL"/>
            </div>
        </div>
   </div>
  )
}

export default InicioSecionNutricionista