import './App.css';
import React, {useState} from 'react';



export default function App() {
  let forma;
  if(Primeraforma.tipoUsuario === "Administrador"){
    forma = <FormaAdmin/>
  } else if(Primeraforma.tipoUsuario === "Alumno"){
    forma = <FormaAlumno/>
  }
  return (
   <>
   <Primeraforma/>
   <div>
      {forma}
   </div>
   </>
  );
}

function Primeraforma(){
const [tipoUsuario,setTipoUsuario] = useState("inidentificado");

const onOptionChange = e =>{
  setTipoUsuario(e.target.value)
}

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
            onChange={onOptionChange}
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
            onChange={onOptionChange}
          />
        </label>
      </p>
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


