import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [tipoUsuario, setTipoUsuario] = useState();
  let forma;
  <Formulario tipoUsuario = {tipoUsuario}/>
  if(tipoUsuario==="Alumno"){
    forma = <FormaAlumno/>
  } else if (<Formulario tipoUsuario={tipoUsuario}/>==="Administrador"){
    forma = <FormaAdmin />
  }
  return(
    <>
    <div>
      <Formulario/>
    </div>
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
  </>
  );
  }