import React from 'react';

function NavBar() {
  return (
    <div>
      <div className="d-flex h-100 text-center text-white bg-portada contenedor-inicial">
        <div className="cover-container d-flex w-100 h-100 p-3 flex-column">
          <header className="mb-autont">
            <div>
              <h3 className="float-md-start mb-0">JJHH</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="#acerca-de">
                  Quien Soy
                </a>
                <a className="nav-link" href="#curriculum">
                  Curriculum
                </a>
                <a className="nav-link" href="#proyectos">
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

      {/* curriculum */}

      {/* trabajos */}

    </div>
  );
}

export default NavBar;
