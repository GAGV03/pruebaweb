import './App.css';
import React, { useContext, useState } from 'react';
import { createContext } from 'react';

export const formsContext = createContext(null);

export default function App() {
  
  return(
    <>
    <div>
      <Formulario/>
      <br/>

      <DisplayForm/>
    </div>
    </>
  );
}

function DisplayForm(){
  const usuario = useContext(formsContext);
  let forma;

  if(usuario === "Alumno"){
    forma = <FormaAlumno/>
  } else if(usuario === "Administrador"){
    forma = <FormaAdmin/>
  }

  return(
    <>
    {forma}
    </>
  )
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

function Formulario () {

  const [tipoUsuario, setTipoUsuario] = useState(null);

  return (
      <>
      <h1>Página Prueba</h1>
      <hr />
      <p>
          <label>
          Soy Alumno
          <input 
              type="radio" 
              name="opcionLogin" 
              value="Alumno" 
              checked={tipoUsuario === "Alumno"}
              onChange={e => setTipoUsuario(e.target.value)}
          />
          </label>
          <br/>
          <br/>
          <label>
          Soy Administrador
          <input 
              type="radio" 
              name="opcionLogin" 
              value="Administrador"
              checked={tipoUsuario === "Administrador"}
              onChange={e => setTipoUsuario(e.target.value)}
          />
          </label>
      </p>
      <formsContext.Provider value={tipoUsuario}>
        <displayForm/>
      </formsContext.Provider>
  </>
  );
  }