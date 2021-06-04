import React from 'react';

import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Specs from './Components/Specs/Specs';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Specs />
      <Projects />
      <Footer />

    </div>

  );
}

export default App;
