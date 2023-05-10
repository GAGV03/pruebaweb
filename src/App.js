import './App.css';
import React, {useState} from 'react';

export default function App() {
  let forma;
  if(Primeraforma.tipoUsuario === "Administrador"){
    forma = <FormaAdmin/>
  } else {
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
  return (
    <>
    <h1>Página Prueba</h1>
    <hr />
      <p>
        <label>
          Soy Alumno
          <input type="radio" name="opcionAlumno" value="perfil" checked={() => setTipoUsuario("Alumno")}/>
        </label>
        <br/>
        <br/>
        <label>
          Soy Administrador
          <input type="radio" name="opcionAdmin" value="perfil" checked={() => setTipoUsuario("Administrador")}/>
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


