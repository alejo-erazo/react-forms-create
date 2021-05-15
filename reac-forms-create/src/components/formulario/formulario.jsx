import { useState } from "react";
import './formularios.css';

const FormularioMantenimiento = (props) => {

    const [servicio, setservicio] = useState('m1');
    const [nombre, setnombre] = useState('');
    const [direccion, setdireccion] = useState('');
    const [celular, setcelular] = useState('');

    const [nombreValidacion, setnombreValidacion] = useState('');
    const [direccionValidacion, setdireccionValidacion] = useState('');
    const [celularValidacion, setcelularValidacion] = useState('');

    let validate = true;
    const agregarMantenimiento = () => {
        if(nombre == null || nombre =='' || nombre ==' '){
            validate = false;
            setnombreValidacion("nombre obligatorio");
        }else {
            setnombreValidacion("");
        }

        if(direccion == null || direccion =='' || direccion ==' '){
            validate = false;
            setdireccionValidacion("direccion obligatorio");
        }else {
            setdireccionValidacion("");
        }

        if(celular == null || celular <= 0){
            validate = false;
            setcelularValidacion("celular debe ser mayor a 0");
        }else {
            setcelularValidacion("");
        }
        
        console.log('nombre: ' + nombre);
        console.log('direccion: ' + direccion);
        console.log('celular: ' + Number(celular));
        if(validate == true){
            const nuevoMantenimiento = {
                id: nombre,
                nombre: nombre,
                direccion: direccion,
                celular: Number(celular)
            };
            props.onMantenimiento(nuevoMantenimiento, servicio);
        }
        
    }

    return (
        <div>
           
                    <span>servicio</span>
                  
                        <select value={servicio} onChange={(event)=> {setservicio(event.target.value)}} >
                            <option value="m1">internet</option>
                            <option value="m2">Television</option>
                        </select>
                        <br />
                  
                    <span>nombre cliente</span> 

                   
                        <input type='text' value={nombre} onChange={(event)=> {setnombre(event.target.value)}} />
                        <br />
           
                    <span>direccion</span>
                   
                        <input type='text' value={direccion} onChange={(event)=> {setdireccion(event.target.value)}} />
                     
                        <br />
                    <span>celular</span>
                        <input type='number' value={celular} onChange={(event)=> {setcelular(event.target.value)}} />
                        <span className='error'>{nombreValidacion}</span>
                        <span className='error'>{direccionValidacion}</span>


                        <span className='error'>{celularValidacion}</span>
                
                        <button type='button' onClick={agregarMantenimiento}>agregar mantenimiento</button>
        </div>
    );
}

export default FormularioMantenimiento;