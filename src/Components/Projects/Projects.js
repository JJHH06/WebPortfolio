import React, {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faGithub, faChrome} from '@fortawesome/free-brands-svg-icons';
import Disney from "../../assets/disney.jpg";
import MemeMemory from "../../assets/memememory.jpg";
import SoundSpace from "../../assets/soundspace.jpg";
import Calculator from "../../assets/Caculator.jpg";
import Ecommerce from "../../assets/chat.jpg";
import Odonto from "../../assets/odontología.jpg";
import Aos from "aos";


function Projects() {
  useEffect(()=>{
    Aos.init({duration: 2800});
},[]);
  return (
    <div className="container seccion-portafolio">
      <div data-aos="fade-down" className="row texto-about">
        <div className="col-lg-8  mx-auto">
          <h2 className="display-5">
            <b id="proyectos">Proyectos destacados</b>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div data-aos="fade" className="col">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={Disney}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
              </img>

              <div className="card-body">
                <p className="card-text">
                  <b>Imitación Disney+</b>
                </p>
                <p className="card-text">
                  Imitación de las página inicial de Disney+ utilizando React y
                  otras tecnologías como Bootstrap 5 y SlickJS.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "http://stw-uvg.site:3177/"
                    >
                      <FontAwesomeIcon icon={faChrome} />
                      &nbsp;Ver
                    </a>
                    <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "https://github.com/JJHH06/disneyplus-imitation-react"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      &nbsp;Repositorio
                    </a>
                  </div>
                  <small className="text-muted">2021</small>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade" className="col">
            <div className="card shadow-sm">
            <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={MemeMemory}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
              </img>

              <div className="card-body">
                <p className="card-text">
                  <b>Meme Memory Game</b>
                </p>
                <p className="card-text">
                  Juego de memoria con temática de memes, que utiliza React Card
                  Flip para su funcionalidad principal.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "http://stw-uvg.site/labs/lab08/jjhh19707/index.html"
                    >
                      <FontAwesomeIcon icon={faChrome} />
                      &nbsp;Ver
                    </a>
                    <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "https://github.com/JJHH06/MemoryGameReact"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      &nbsp;Repositorio
                    </a>
                  </div>
                  <small className="text-muted">2021</small>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade" className="col">
            <div className="card shadow-sm">
            <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={SoundSpace}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
              </img>

              <div className="card-body">
                <p className="card-text">
                  <b>SoundSpace</b>
                </p>
                <p className="card-text">
                  App de Reproductor de música que recomienda basado en
                  historial, realizada con Flutter, Express, Postgresql y Mongo.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "https://github.com/Andrei-Portales/proyecto_1_basededatos"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      &nbsp;Repositorio
                    </a>
                  </div>
                  <small className="text-muted">2021</small>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade" className="col">
            <div className="card shadow-sm">
            <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={Calculator}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
              </img>

              <div className="card-body">
                <p className="card-text">
                  <b>Reactive Calculator</b>
                </p>
                <p className="card-text">
                  Calculadora simple, que mediante Bootstrap 5, hace que para
                  teléfonos y PC se vea distinto, adaptandose al espacio de su
                  entorno.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "http://stw-uvg.site/labs/lab10/jjhh19707/index.html"
                    >
                      <FontAwesomeIcon icon={faChrome} />
                      &nbsp;Ver
                    </a>
                    <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "https://github.com/JJHH06/responsive-react-calculator"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      &nbsp;Repositorio
                    </a>
                  </div>
                  <small className="text-muted">2021</small>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade" className="col">
            <div className="card shadow-sm">
            <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={Ecommerce}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
              </img>

              <div className="card-body">
                <p className="card-text">
                  <b>Chat Para Eccomerce</b>
                </p>
                <p className="card-text">
                  Demo de chat de ecommerce que mediante React y Bootstrap 5,
                  actua distinto dependiendo del tipo de usuario y posee estilos
                  responsivos al tamaño.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "https://proyecto2dev.stw-uvg.site/"
                    >
                      <FontAwesomeIcon icon={faChrome} />
                      &nbsp;Ver
                    </a>
                    <a
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      href = "https://github.com/El-Mendez/Web_Proyecto2_Chat"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      &nbsp;Repositorio
                    </a>
                  </div>
                  <small className="text-muted">2021</small>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade" className="col">
            <div className="card shadow-sm">
            <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={Odonto}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
              </img>

              <div className="card-body">
                <p className="card-text">
                  <b></b>
                </p>
                <p className="card-text">
                  <b>Sistema Odontológico</b>
                </p>
                <p className="card-text">
                  Sistema de Odontología que facilita de pacientes, inventario y
                  citas. Realizado con Express y React.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    
                  </div>
                  <small className="text-muted">2021</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
