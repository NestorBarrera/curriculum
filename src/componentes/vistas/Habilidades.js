import React,{Component}from'react';
import '../../CSS/estilo.css';
class Habilidades extends Component{
    render(){
        return(
<div className="container">
        <ul className="list-group">
        <li className="list-group-item">Inglés</li>
        <li className="list-group-item">Trabajo en equipo</li>
        <li className="list-group-item">Responsabilidad</li>
        <li className="list-group-item">Puntualidad</li>
        </ul>
</div>
        );
    }
}
export default Habilidades;