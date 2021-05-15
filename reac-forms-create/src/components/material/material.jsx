import React from "react";
import Materiales from "../materiales/materiales";
import './material.css';


const Material = (props) => {
    return (
        <React.Fragment key='0'>
          {
            props.listaMateriales.map((tipo, index)=> {
              return (
                <React.Fragment key={tipo.id}>
                 <p className='tipoMaterial'>tipo:{tipo.tipo}</p>
                  {
                    tipo.materiales.map((material, index)=> {
                      return (
                        <React.Fragment key={material.id}>
                          <Materiales m={material}/>
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

export default Material;