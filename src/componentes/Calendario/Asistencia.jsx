import React from 'react'
import CalendarioDeAsistencias from './CalendarioDeAsistencias.jsx';
import DiasDeRacha from './DiasDeRacha.jsx';
import InformacionAsistencia from './InformacionAsistencia.jsx';
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion.jsx';
import useStore from '../../assets/store/useStore';
import './Asistencia.css';
const Asistencia = () => {
  const id = useStore((state) => state.id);
  return (
    <div className="contenedor_usuario">
      <BarraNavegacion id={id}/>
    <div className='Asistencia'>
        <DiasDeRacha/>
        <CalendarioDeAsistencias/>
        <InformacionAsistencia/>
    </div>

    </div>
  )
}

export default Asistencia