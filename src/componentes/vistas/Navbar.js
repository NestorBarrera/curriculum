import React,{Component}from'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return(
    <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/Personal" className="navbar-brand">Datos Personales</Link>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to="/Escuela" className="nav-item nav-link active" >Datos Escolares <span className="sr-only">(current)</span></Link>
            <Link to="/Experiencia" className="nav-item nav-link active" >Experiencia Laboral</Link>
            <Link to="/Reconocimientos" className="nav-item nav-link active" >Reconociemtos</Link>
            <Link to="/Habilidades" className="nav-item nav-link active" tabindex="-1" aria-disabled="true">Hablilidades</Link>
            </div>
        </div>
        </nav>
    </header>
        );
    }
}

export default Navbar;