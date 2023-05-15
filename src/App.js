import './App.css';
import React, {useContext, useState} from 'react';
import {PruebaContexto}  from './Formulario';
import Formulario from './Formulario'

export default function App() {
  const tipoU = useContext(PruebaContexto);
  let forma;
  if({tipoU} === "Administrador"){
    forma = <FormaAdmin/>
  } else if ({tipoU} === "Alumno"){
    forma = <FormaAlumno/>
  }
  return (
   <>
      <Formulario/>
      <div>
          {forma}
      </div>
   </>
  );
}

function FormaAlumno(){
  return(
    <form>
      <h3>Forma para el Alumno</h3>
      <label>
        Nombre:
        <input type='text' name='nombre'/>
        </label>
      <label>
        Contraseña:
        <input type='text' name='contraseña'/>
      </label>
    </form>
  );
}

function FormaAdmin(){
  return(
    <form>
      <h3>Forma para el Administrador</h3>
      <label>
        Nombre:
        <input type='text' name='nombre'/>
        </label>
      <label>
        Contraseña:
        <input type='text' name='contraseña'/>
      </label>
    </form>
  );
}


