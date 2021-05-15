import { useState } from "react";
import './App.css';
import Servicios from './components/servicios/servicios';
import Material from "./components/material/material";
import FormularioMantenimiento from "./components/formulario/formulario";
import FormularioMateriales from "./components/formulario/formularioMateriales";

let listaMantenimientos = [
    {
      id: 'm1',
      tipo: 'internet',
      mantenimientos: [
        {
          id:'m1i1',
          nombre: 'carlos',
          direccion: 'chipre',
          celular: 3212876545
        },
        {
          id:'m1i2',
          nombre: 'maria',
          direccion: 'palermo',
          celular: 3224567876
        }
        
      ]
    },
    {
      id: 'm2',
      tipo: 'television',
      mantenimientos: [
        {
          id:'m2i1',
          nombre: 'luis',
          direccion: 'fatima',
          celular: 3212898763
        },
        {
          id:'m2i2',
          nombre: 'juan',
          direccion: 'prado',
          celular: 3227657876
        }
        
      ]
    }
];

let listaMateriales = [
  {
    id: 'l1',
    tipo: 'cable',
    materiales: [
      {
        id:'l1i1',
        nombre: 'fibra drop',
        cantidad: 305,
        responsable: 'pedro'
      },
      {
        id:'l1i2',
        nombre: 'utp',
        cantidad: '208',
        responsable: 'diego'
      }
      
    ]
  },
  {
    id: 'l2',
    tipo: 'conectores',
    materiales: [
      {
        id:'l2i1',
        nombre: 'rj45',
        cantidad: 50,
        responsable: 'guillermo'
      },
      {
        id:'l2i2',
        nombre: 'optico mecan',
        cantidad: 10,
        responsable: 'paula'
      }
      
    ]
  }
];


function App() {

  const [mantenimientos, setMantenimientos] = useState(listaMantenimientos);

  const [materiales, setMateriales] = useState(listaMateriales);

  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <div className='contenedorMantenimientos'>
          <div className=''>
         < FormularioMantenimiento

              onMantenimiento={(mantenimientoObj, soporte) =>{
                const nuevoMantenimiento = [];
                for(let i =0; i < mantenimientos.length; i++) {
                  if(mantenimientos[i].id !== soporte) {
                    nuevoMantenimiento.push(mantenimientos[i]);
                  }else {
                    nuevoMantenimiento.push(
                      {
                        ...mantenimientos[i], 
                        mantenimientos:[...mantenimientos[i].mantenimientos, mantenimientoObj]
                      }
                    );
                  }
                }
                setMantenimientos(nuevoMantenimiento);
              }} 
            />
          </div>
          <div className='tablaMantenimientos'>
          <table>
            <tbody>
              <Servicios listaMantenimientos={mantenimientos} />
            </tbody>
          </table>
          </div>
        </div>
       
      </div>
      <div className='contenedorMateriales'>
          <div className='filter-container'>
            <FormularioMateriales
              onMaterial={(materialesObj, tipo  ) =>{
                const newmateriales = [];
                for(let i =0; i < materiales.length; i++) {

                  if(materiales[i].id !== tipo  ) {
                    newmateriales.push(materiales[i]);
                  }else {
                    newmateriales.push(
                      {
                        ...materiales[i], 
                        materiales:[...materiales[i].materiales, materialesObj]
                      }
                    );
                  }
                }
                setMateriales(newmateriales);
              }} 
            />
          </div>
          <div className='table-container'>
          <table>
            <tbody>
              <Material listaMateriales={materiales}/>
            </tbody>
          </table>
          </div>
        </div>
    </div>
  );
}

export default App;
