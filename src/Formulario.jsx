import React, {useContext, useState} from 'react';

export const PruebaContexto = React.createContext({tipoUsuario:null})


    function Formulario () {
    const [tipoUsuario,setTipoUsuario] = useState("Alumno");
  return (
    <PruebaContexto.Provider value={tipoUsuario}>
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
  </PruebaContexto.Provider>
  );
}

export default Formulario;