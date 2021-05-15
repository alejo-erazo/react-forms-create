import { useState } from "react";
import './filter.style.css';

const FormularioMateriales = (props) => {

    const [tipo, settipo] = useState('m1');
    const [nombre, setnombre] = useState('');
    const [responsable, setresponsable] = useState('');
    const [cantidad, setcantidad] = useState('');

    const [nombreValidacion, setnombreValidacion] = useState('');
    const [responsableValidacion, setresponsableValidacion] = useState('');
    const [cantidadValidacion, setcantidadValidacion] = useState('');

    let validate = true;
    const agregarMaterial = () => {
        if(nombre == null || nombre =='' || nombre ==' '){
            validate = false;
            setnombreValidacion("nombre obligatorio");
        }else {
            setnombreValidacion("");
        }

        if(responsable == null || responsable =='' || responsable ==' '){
            validate = false;
            setresponsableValidacion("responsable obligatorio");
        }else {
            setresponsableValidacion("");
        }

        if(cantidad == null || cantidad <= 0){
            validate = false;
            setcantidadValidacion("cantidad debe ser mayor a 0");
        }else {
            setcantidadValidacion("");
        }
        
        console.log('nombre: ' + nombre);
        console.log('responsable: ' + responsable);
        console.log('cantidad: ' + Number(cantidad));
        if(validate == true){
            const nuevoMaterial = {
                id: nombre,
                nombre: nombre,
                responsable: responsable,
                cantidad: Number(cantidad)
            };
            props.onMaterial(nuevoMaterial, tipo);
        }
        
    }

    return (
        <div>
           
                    <span>tipo</span>
                  
                        <select value={tipo} onChange={(event)=> {settipo(event.target.value)}} >
                            <option value="l1">cable</option>
                            <option value="l2">conectores</option>
                        </select>
                        <br />
                  
                    <span>nombre material</span> 

                   
                        <input type='text' value={nombre} onChange={(event)=> {setnombre(event.target.value)}} />
                        <br />
           
                    <span>responsable</span>
                   
                        <input type='text' value={responsable} onChange={(event)=> {setresponsable(event.target.value)}} />
                     
                        <br />
                    <span>cantidad</span>
                        <input type='number' value={cantidad} onChange={(event)=> {setcantidad(event.target.value)}} />
                        <span className='error'>{nombreValidacion}</span>
                        <span className='error'>{responsableValidacion}</span>


                        <span className='error'>{cantidadValidacion}</span>
                
                        <button type='button' onClick={agregarMaterial}>agregar mantenimiento</button>
        </div>
    );
}

export default FormularioMateriales;