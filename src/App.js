import logo from './logo.svg';
import './App.css';

function App(props) {
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {subject}!
        </p>
        <Perfil />
        <br />
        <MyButton />
      </header>
    </div>
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

function MyButton(){
  return (<button>Soy un boton</button>
  );
}

export default App;
