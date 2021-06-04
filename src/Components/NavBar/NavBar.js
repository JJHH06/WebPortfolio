import React from "react";
//para componente 2
import Retrato from "../../assets/selfie.jpg";
function NavBar() {
  return (
    <div>
      <div className="d-flex h-100 text-center text-white bg-portada contenedor-inicial">
        <div className="cover-container d-flex w-100 h-100 p-3 flex-column">
          <header className="mb-autont">
            <div>
              <h3 className="float-md-start mb-0">JJHH</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="#">
                  Portada
                </a>
                <a className="nav-link" href="#">
                  Quien Soy
                </a>
                <a className="nav-link" href="#">
                  Proyectos
                </a>
              </nav>
            </div>
          </header>

          <main className="portada-container">
            <h1 className="display-2">
              <b>Jose Hurtarte</b>
            </h1>
            <p className="lead title-description">
              Frontend and Backend developer
            </p>
          </main>
        </div>
      </div>

      {/* about */}
      <div className="container">
        <div className="row texto-about">
          <div className="col-lg-8  mx-auto">
            <h2 className="display-5">
              <b>Acerca de</b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img className="retrato-about align-self-center" src={Retrato} />
          </div>
          <div className="d-flex align-items-center col-lg-8 mx-auto">
            <p className="fw-light fs-3">
              Mi nombre es José Javier Hurtarte,Tengo 20 años, soy un front y
              backend developer, apasionado por el User Experience. Actualmente
              soy un estudiante de Ingeniería en Ciencias de la Computación en
              la Universidad del Valle de Guatemala
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center col mx-auto">
            <ul className="list-inline banner-social-buttons">
              <li className="list-inline-item">
                &nbsp;
                <button
                  className="btn btn-outline-secondary btn-lg btn-default"
                  type="button"
                >
                  <i className="fa fa-google-plus fa-fw"></i>
                  <span className="network-name">&nbsp; LinkedIn</span>
                </button>
              </li>
              <li className="list-inline-item">
                &nbsp;
                <button
                  className="btn btn-outline-secondary btn-lg btn-default"
                  type="button"
                >
                  <i className="fa fa-twitter fa-fw"></i>
                  <span className="network-name">&nbsp;Instagram</span>
                </button>
              </li>
              <li className="list-inline-item">
                &nbsp;
                <button
                  className="btn btn-outline-secondary btn-lg btn-default"
                  type="button"
                >
                  <i className="fa fa-github fa-fw"></i>
                  <span className="network-name">&nbsp;github</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* curriculum */}

      <div className="container">
        <div className="row texto-about">
          <div className="col-lg-8  mx-auto">
            <h2 className="display-5">
              <b>Acerca de</b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="d-flex align-items-center col mx-auto list-group">
          <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Galardon académico de la Riva</h5>
      <small className="text-muted">2018</small>
    </div>
    <p className="mb-1">Premio a los mejores promedios de la promoción de colegio.</p>
    <small className="text-muted">Obtenido mientras estudié Bachillerato en Computación</small>
  </a>

  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Ingeniería en Ciencias de la Computación</h5>
      <small className="text-muted">2019-2023</small>
    </div>
    <p className="mb-1">Universidad del Valle de Guatemala</p>
    <small className="text-muted">Actualmente estudiando y especializandome en seguridad informática</small>
  </a>

  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Beca Fundación Educación</h5>
      <small className="text-muted">2020</small>
    </div>
    <p className="mb-1">Dada por la organización suiza Fundación educación </p>
    <small className="text-muted">Beca completa dada a alumnos destacados en carreras tecnológicas</small>
  </a>

  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Distinción Académica de Estudiante Distinguido</h5>
      <small className="text-muted">2020</small>
    </div>
    <p className="mb-1">Universidad del Valle de Guatemala</p>
    <small className="text-muted">Obtenida por promedio superior a 85 en el año 2019</small>
  </a>

  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Auxiliar Algoritmos y Programación Básica</h5>
      <small className="text-muted">2021</small>
    </div>
    <p className="mb-1">Universidad del Valle de Guatemala</p>
    <small className="text-muted">Profesor Auxiliar presencial del curso introductorio de programación</small>
  </a>

  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Distinción Académica Honor al mérito académico</h5>
      <small className="text-muted">2021</small>
    </div>
    <p className="mb-1">Universidad del Valle de Guatemala</p>
    <small className="text-muted">Obtenida por promedio superior a 90 en el año 2020</small>
  </a>

  
          </div>
          <div className="d-flex align-items-center col mx-auto">
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              A simple warning list group item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
