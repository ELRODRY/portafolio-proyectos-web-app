import React from "react";
import "./App.css";
import linkedinLogo from "./assets/linkedin.svg"
import githubLogo from "./assets/github.svg"
import instagramLogo from "./assets/instagram.svg"
import calculadoraImg from "./assets/calculadoraWeb.jpg"
import listaDeComprasImg from "./assets/listaDeCompras.jpg"
import buscadorDeGifsImg from "./assets/buscadorGifs.jpg"
import contadorImg from "./assets/contadorApp.jpg"


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
        <h1>Hola! Mi nombre es Rodrigo Ezequiel Olivares</h1>
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
                  src={calculadoraImg}
                  alt="Calculadora Web"
                />
              </a>
            </div>
            <div className="containerLista">
              <h4>LISTA DE COMPRAS</h4>
              <a href="https://listadodecompras.netlify.app/" target="_blank">
                <img
                  className="listaDeCompras"
                  src={listaDeComprasImg}
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
                  src={buscadorDeGifsImg}
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
                  src={contadorImg}
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
          <img src={linkedinLogo} alt="Icono Linkedin" />
          <p>Linkedin</p>
        </a>
        <a
          href="https://github.com/ELRODRY"
          target="_blank"
          className="anchorGitHub"
        >
          <img
            src={githubLogo}
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
            src={instagramLogo}
            alt="Icono Instagram"
          />
          <p>Instagram</p>
        </a>
      </footer>
    </>
  );
}

export default App;
