import './App.css';

export default function App() {
  return (
    <primeraForma />
  );
}

function primeraForma(){
  return (
    <>
    <h1>Página Prueba</h1>
    <hr />
      <p>
        <label>
          Soy Alumno
          <input type="radio" name="opcionAlumno" value="option1"/>
        </label>
        <br/>
        <br/>
        <label>
          Soy Administrador
          <input type="radio" name="opcionAdmin" value="option2"/>
        </label>
      </p>
  </>
  );
}

const personaje = {
  nombre : 'Gustavo Gutiérrez',
  imagen : 'https://m.media-amazon.com/images/I/71vLOiPjrYL._AC_SX679_.jpg',
  edad: 20,
  tamañoImagen:30
}

function Perfil(){
  return(
    <>
      <h2>{personaje.nombre}</h2>
      <img
          className='imagenPerfil'
          src={personaje.imagen}
          alt={'FotoDe'+personaje.nombre}
          style={{
            width:personaje.tamañoImagen,
            height:personaje.tamañoImagen
          }}
      />
    </>
  );
}

function formaUsuario(){
  return(
    <form>
      <h3>Forma para el Usuario</h3>
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

function formaAdmin(){
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

function MyButton(){
  return (<button>Soy un boton</button>
  );
}

