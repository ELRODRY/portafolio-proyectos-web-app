import './App.css'


function App() {



  return (
    <>
      <header>
        <p className="tituloIzquierda">APLICACIONES WEB</p>
        <div className="anchorsHeader">
          <a href="" className="sobreHeader">SOBRE MI</a>
          <a href="" className="proyectosaHeader"> PROYECTOS</a>
          <a href="" className="contactoHeader"> CONTACTO</a>
        </div>
      </header>
      <div className="sobreContainer">
        <h1>Hola me llamo Rodrigo Ezequiel Olivares</h1>
        <h2>Soy Frontend Developer Entry-Level</h2>
        <h3>Tengo conocimientos en HTML, CSS, JAVASCRIPT y estoy estudiando REACT</h3>
      </div>
      <div className="proyectosContainer">
        <h2>Las Aplicaciones Web estan desarrolladas en React</h2>
        <p>Hace click en la imagen y te rediccionara a la Aplicación Web</p>
        <div className="imagenesProyectos">

          <a href="https://calculadoraweblocalstorage.netlify.app/" target="_blank" >
            <img className="calculadoraWeb" src="\src\assets\calculadora-web.jpg" alt="Calculadora Web" />
          </a>
          <a href="https://listadodecompras.netlify.app/" target="_blank">
            <img className="listaDeCompras" src="src\assets\lista-de-compras.jpg" alt="Lista de Compras" />
          </a>

          <a href="https://buscadordegifapigiphy.netlify.app/" target="_blank">
            <img className="buscadorDeGifs" src="src\assets\buscador-gifs.jpg" alt="Buscador de Gifs" />
          </a>
          <a href="https://contadorpracticausestate.netlify.app/" target="_blank" rel="noopener noreferrer">

            <img className="contadorApp" src="src\assets\contador-app.jpg" alt="Contador App" />
          </a>

        </div>
      </div>
      <footer>alalalaalaalaal</footer>
    </>
  )
}

export default App
