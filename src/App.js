import './App.css';
import React from 'react';
import Formulario from './Formulario'
import { userForm } from './Formulario';
//import { useContext } from 'react';


export default function App() {
  const tipoU = React.useContext(userForm);
  return (
  <userForm.Provider value = {tipoU}>
  <>
    <Formulario/>
    <div>
        <DisplayForma />
    </div>
  </>
  </userForm.Provider>
  );
}

function DisplayForma(){
  let forma;
  const tipoU = React.useContext(userForm);
    if(tipoU === "Alumno"){
      forma = <FormaAlumno/>
    }else if(tipoU === "Administrador"){
      forma = <FormaAdmin/>
    }
  return(
    <div>
        {forma}
    </div>
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


