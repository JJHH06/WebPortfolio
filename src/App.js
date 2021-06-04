import React from 'react';

import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Specs from './Components/Specs/Specs';
import About from './Components/About/About';

function App(){

    return (
        <div>
            <NavBar/>
            <About/>
            <Specs/>
            <Projects/>
            
            
        </div>

        
    );
}

export default App;