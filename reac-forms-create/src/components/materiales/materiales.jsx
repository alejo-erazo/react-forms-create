import React from "react";
import './materiales.css';

const Materiales = (props) => {
    return (
        <React.Fragment key={props.m.id}>

            <div className='materiales'>
             <p>nombre:{props.m.nombre}</p>
             <p>cantidad:{props.m.cantidad}</p>
             <p>responsable:{props.m.responsable}</p>
            </div>
          
        </React.Fragment>
    );
}

export default Materiales;