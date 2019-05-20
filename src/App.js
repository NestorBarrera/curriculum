import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Principal from './componentes/vistas/Principal';
import Personal from './componentes/vistas/Personal';
import Navbar from './componentes/vistas/Navbar';
import Escuela from './componentes/vistas/Escuela';
import Experiencia from './componentes/vistas/Experiencia';
import Habilidades from './componentes/vistas/Habilidades';
import Reconocimientos  from './componentes/vistas/Reconocimientos';

function App() {
  return (
    
    <Router>
      <Home/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Principal}/>
        <Route path="/Personal" component={Personal}/>
        <Route path="/Escuela" component={Escuela}/>
        <Route path="/Experiencia" component={Experiencia}/>
        <Route path="/Habilidades" component={Habilidades}/>
        <Route path="/Reconocimientos" component={Reconocimientos}/>
      </Switch>
    </Router>

    
  );
}

export default App;
