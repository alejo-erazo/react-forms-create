import React from "react";
import Mantenimiento from "../mantenimiento/mantenimiento";
import './servicios.style.css';

const Servicios = (props) => {
    return (
        <React.Fragment key='0'>
          {
            props.listaMantenimientos.map((servicio, index)=> {
              return (
                <React.Fragment key={servicio.id}>
                  <tr className='family'>
                    <th colSpan='3' className='servicio'>{servicio.tipo}</th>
                  </tr>
                 
                 
                  
                  {
                    servicio.mantenimientos.map((mantenimiento, index)=> {
                      return (
                        <React.Fragment key={mantenimiento.id}>
                          <Mantenimiento mantenimiento={mantenimiento}/>
                           </React.Fragment>
                      );
                    })
                  }
                  
                </React.Fragment>
              );
              
            })
          }
          
        </React.Fragment>
    );
}

export default Servicios;