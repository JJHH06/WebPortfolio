import React from 'react';
//para componente 2
import Retrato from '../../assets/selfie.jpg';
function NavBar(){

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
              <h1 className="display-2"><b>Jose Hurtarte</b></h1>
              <p className="lead title-description">
                Frontend and Backend developer
              </p>
            </main>
          </div>
        </div>

        <div className="container">
            <div className="row texto-about">
                <div className="col-lg-8  mx-auto">
                    <h2 className = "display-5"><b>Acerca de</b></h2>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center"><img className = "retrato-about align-self-center" src = {Retrato}/></div>
                <div className="d-flex align-items-center col-lg-8 mx-auto">
                    <p className = "fw-light fs-3">Mi nombre es José Javier Hurtarte,Tengo 20 años, soy un front y backend developer, apasionado por el diseño. Actualmente soy un estudiante de Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala</p>
                </div>
            </div>
            <div className="row">
                <div className="d-flex justify-content-center col mx-auto">
                    <ul className="list-inline banner-social-buttons">
                        <li className="list-inline-item">&nbsp;<button className="btn btn-outline-secondary btn-lg btn-default" type="button"><i className="fa fa-google-plus fa-fw"></i><span className="network-name">&nbsp; LinkedIn</span></button></li>
                        <li className="list-inline-item">&nbsp;<button className="btn btn-outline-secondary btn-lg btn-default" type="button"><i className="fa fa-twitter fa-fw"></i><span className="network-name">&nbsp;Instagram</span></button></li>
                        <li className="list-inline-item">&nbsp;<button className="btn btn-outline-secondary btn-lg btn-default" type="button"><i className="fa fa-github fa-fw"></i><span className="network-name">&nbsp;github</span></button></li>
                    </ul>
                </div>
            </div>
        </div>



        
      </div>
    );
}

export default NavBar;