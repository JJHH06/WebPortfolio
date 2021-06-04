import React,{useEffect} from 'react';
import Aos from "aos";
function Specs() {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
  return (
    <div id="curriculum" className="container seccion-portafolio">
      <div data-aos="fade" className="row texto-about">
        <div className="col-lg-8  mx-auto">
          <h2 className="display-5">
            <b>Logros y Habilidades</b>
          </h2>
        </div>
      </div>
      <div className="row">
        <div  className="d-flex align-items-center col mx-auto list-group">
          <a   data-aos="fade-right" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Galardon académico de la Riva</h5>
              <small className="text-muted">2018</small>
            </div>
            <p className="mb-1">
              Premio a los mejores promedios de la promoción de colegio.
            </p>
            <small className="text-muted">
              Obtenido mientras estudié Bachillerato en Computación
            </small>
          </a>

          <a   data-aos="fade-right" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Ingeniería en Ciencias de la Computación</h5>
              <small className="text-muted">2019-2023</small>
            </div>
            <p className="mb-1">Universidad del Valle de Guatemala</p>
            <small className="text-muted">
              Actualmente estudiando y especializandome en seguridad informática
            </small>
          </a>

          <a   data-aos="fade-right" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Beca Fundación Educación</h5>
              <small className="text-muted">2020</small>
            </div>
            <p className="mb-1">
              Dada por la organización suiza Fundación educación{" "}
            </p>
            <small className="text-muted">
              Beca completa dada a alumnos destacados en carreras tecnológicas
            </small>
          </a>

          <a   data-aos="fade-right" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Distinción Académica de Estudiante Distinguido
              </h5>
              <small className="text-muted">2020</small>
            </div>
            <p className="mb-1">Universidad del Valle de Guatemala</p>
            <small className="text-muted">
              Obtenida por promedio superior a 85 en el año 2019
            </small>
          </a>

          <a   data-aos="fade-right" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Auxiliar Algoritmos y Programación Básica
              </h5>
              <small className="text-muted">2021</small>
            </div>
            <p className="mb-1">Universidad del Valle de Guatemala</p>
            <small className="text-muted">
              Profesor Auxiliar presencial del curso introductorio de
              programación
            </small>
          </a>

          <a   data-aos="fade-right" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Distinción Académica Honor al mérito académico
              </h5>
              <small className="text-muted">2021</small>
            </div>
            <p className="mb-1">Universidad del Valle de Guatemala</p>
            <small className="text-muted">
              Obtenida por promedio superior a 90 en el año 2020
            </small>
          </a>
        </div>
        <div className="d-flex align-items-center col mx-auto list-group">
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">Python:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">Java:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">React:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar75"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">Javascript:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar85"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">Flutter:</p>

            <div className="progress">
              <div
                className="progress-bar  progress-bar50"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">C++:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar75"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">C#:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar70"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">Kotlin:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar85"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">Express:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar80"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
          <a data-aos="fade-left"   className="list-group-item list-group-item-action">
            <p className="mb-1">SQL:</p>

            <div className="progress">
              <div
                className="progress-bar progress-bar100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Specs;