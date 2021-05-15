import React from "react";
import './mantenimiento.css';

const Mantenimiento = (props) => {
    return (
       
       
       <React.Fragment key={props.mantenimiento.id}>
       <div className='contenedorMantenimientos'>
            <p className='mantenimientos'> nombre: {props.mantenimiento.nombre}</p> <br />
            <p className='mantenimientos'> direccion: {props.mantenimiento.direccion}</p><br />
            <p className='mantenimientos'> celular: {props.mantenimiento.celular}</p><br />
       </div>
           
        </React.Fragment>
    );
}

export default Mantenimiento;