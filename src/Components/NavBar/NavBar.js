import React from 'react';


function NavBar(){

    return (

  <div className="d-flex h-100 text-center text-white bg-dark contenedor-inicial">
        <div className="cover-container d-flex w-100 h-100 p-3 flex-column">
  <header className="mb-auto">
    <div>
      <h3 className="float-md-start mb-0">JJHH</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <a className="nav-link active" aria-current="page" href="#">Portada</a>
        <a className="nav-link" href="#">Quien Soy</a>
        <a className="nav-link" href="#">Proyectos</a>
      </nav>
    </div>
  </header>

  <main className="portada-container">
    <h1>Jose Hurtarte</h1>
    <p className="lead title-description">Frontend and Backend developer</p>
    
  </main>


</div>
        </div>

        
    );
}

export default NavBar;