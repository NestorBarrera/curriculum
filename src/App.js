import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Principal from './componentes/vistas/Principal';
import Personal from './componentes/vistas/Personal';
import Navbar from './componentes/vistas/Navbar';

function App() {
  return (
    
    <Router>
      <Home/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Principal}/>
        <Route path="/Personal" component={Personal}/>
      </Switch>
    </Router>

    
  );
}

export default App;
