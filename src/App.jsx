import "./App.css";

function App() {
  return (
    <>
      <header>
        <p className="tituloIzquierda">PORTAFOLIO DE APLICACIONES WEB</p>
        <div className="anchorsHeader">
          <a href="#footerContacto" className="contactoHeader">
            CONTACTO
          </a>
        </div>
      </header>
      <div className="sobreContainer">
        <h1>Hola me llamo Rodrigo Ezequiel Olivares</h1>
        <h2>Soy Frontend Developer Entry-Level</h2>
        <h3>
          Tengo conocimientos en HTML, CSS, JAVASCRIPT y estoy estudiando REACT
        </h3>
      </div>
      <div className="proyectosContainer">
        <div className="textoProyectos">
          <h2>Las Aplicaciones Web estan desarrolladas en React</h2>
          <p>Hace click en la imagen y te redirecciona a la Aplicación Web</p>
        </div>
        <div className="imagenesProyectos">
          <div className="containerCalLis">
            <div className="containerCaluladora">
              <h4>CALCULADORA WEB</h4>
              <a
                href="https://calculadoraweblocalstorage.netlify.app/"
                target="_blank"
              >
                <img
                  className="calculadoraWeb"
                  src="\src\assets\calculadora-web.jpg"
                  alt="Calculadora Web"
                />
              </a>
            </div>
            <div className="containerLista">
              <h4>LISTA DE COMPRAS</h4>
              <a href="https://listadodecompras.netlify.app/" target="_blank">
                <img
                  className="listaDeCompras"
                  src="src\assets\lista-de-compras.jpg"
                  alt="Lista de Compras"
                />
              </a>
            </div>
          </div>
          <div className="containerBusCon">
            <div className="containerBuscador">
              <h4>BUSCADOR DE GIFS</h4>
              <a
                href="https://buscadordegifapigiphy.netlify.app/"
                target="_blank"
              >
                <img
                  className="buscadorDeGifs"
                  src="src\assets\buscador-gifs.jpg"
                  alt="Buscador de Gifs"
                />
              </a>
            </div>
            <div className="containerContador">
              <h4>CONTADOR</h4>
              <a
                href="https://contadorpracticausestate.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="contadorApp"
                  src="src\assets\contador-app.jpg"
                  alt="Contador App"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer id="footerContacto">
        <a
          href="https://www.linkedin.com/in/rodrigo-olivares-8323b6230/"
          target="_blank"
          className="anchorLinkedin"
        >
          <img src="src\assets\linkedin-svgrepo-com.svg" alt="Icono Linkedin" />
          <p>Linkedin</p>
        </a>
        <a
          href="https://github.com/ELRODRY"
          target="_blank"
          className="anchorGitHub"
        >
          <img
            src="src\assets\github-color-svgrepo-com.svg"
            alt="Icono GitHub"
          />
          <p>GitHub</p>
        </a>
        <a
          href="https://www.instagram.com/elrodrygammer/?hl=es"
          target="_blank"
          className="anchorInstagram"
        >
          <img
            src="src\assets\instagram-1-svgrepo-com.svg"
            alt="Icono Instagram"
          />
          <p>Instagram</p>
        </a>
      </footer>
    </>
  );
}

export default App;
